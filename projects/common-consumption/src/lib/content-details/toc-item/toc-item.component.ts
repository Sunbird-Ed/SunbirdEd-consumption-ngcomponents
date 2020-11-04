import {
  Component, OnInit, Input, Output, EventEmitter, ViewChild, QueryList, ViewChildren, OnChanges
} from '@angular/core';
import { FlattenedType, TocCardType } from '../../card/models';
import { MimeTypePipe, MimeTypeMasterData } from '../../pipes-module/mime-type';
import {AccordionItemComponent} from '../../accordion/accordion-item/accordion-item.component';

@Component({
  selector: 'sb-toc-item',
  templateUrl: './toc-item.component.html',
  styleUrls: ['./toc-item.component.scss'],
  providers: [MimeTypePipe]
})
export class TocItemComponent implements OnInit, OnChanges {
  @Input() expandMode: 'single' | 'multiple' = 'multiple';
  @ViewChildren('sbAccordionItem') accordionItems: QueryList<AccordionItemComponent>;
  @Input() tocData;
  @Input() activeMimeTypeFilter = ['all'];
  @Input() noContentMessage = 'No content available';
  @Input() contentStatus = [];
  @Input() selectMode;
  @Input() selectAll;
  @Input() playBtnConfig;
  @Input() platform;
  @Input() trackableDefaultImage = '';
  @ViewChild('chapter') divs: QueryList<any>;
  @ViewChildren('chapterContainer') chapterContainer: QueryList<any>;

  @Input() type = "";

  @Input() activeContent;
  @Input() recogniseCollection = false;
  @Output() tocCardClick: EventEmitter<any> = new EventEmitter();
  @Output() noContent: EventEmitter<any> = new EventEmitter();
  @Output() selectedItem: EventEmitter<any> = new EventEmitter();
  @Output() playButtonClick: EventEmitter<any> = new EventEmitter();

  get FlattenedType() { return FlattenedType; }
  get MimeTypeMasterData() { return MimeTypeMasterData; }

  isMimeTypeFilterChanged = false;

  private isSameMimeTypeInChildren = ((mimeTypesCount, activeMimeType) => {
    const contentMimeType = Object.keys(JSON.parse(mimeTypesCount));
    return Boolean(activeMimeType.filter(value => contentMimeType.includes(value)).length);
  });
  private isSameMimeType = (currentContent) => this.activeMimeTypeFilter.find(mimeType => mimeType === currentContent.mimeType);
  private isChildrenPresent = (currentContent) => Boolean(currentContent.children && currentContent.children.length);

  constructor() { }

  ngOnInit() {
    this.setActiveContent();
  }

  ngOnChanges(changes) {
    if (changes.activeMimeTypeFilter) {
      this.isMimeTypeFilterChanged = false;
    } else if (changes.tocData) {
      this.setActiveContent();
    } else if (changes.selectAll) {
      this.selectAllItems(this.selectAll);
    }
  }

  setActiveContent() {
    if (this.tocData && this.tocData.children) {
      if ((this.tocData.children[0].contentData && this.tocData.children[0].contentData.trackable && this.tocData.children[0].contentData.trackable.enabled === 'Yes') ||
        (this.tocData.children[0].trackable && this.tocData.children[0].trackable.enabled === 'Yes')) {
        return;
      }
      const flattenDeepContents = this.flattenDeep(this.tocData.children);
      if (!this.activeContent) {
        this.activeContent = this.firstNonCollectionContent(flattenDeepContents);
      }
      if (!this.activeContent) {
        this.noContent.emit({ message: 'No Content Available' });
      }
    }
  }

  public filterChildren(content) {
    // Check for the ActiveMimeType
    if (this.activeMimeTypeFilter.includes('all')) {
      if (content.mimeType === MimeTypeMasterData.COLLECTION) {
        return this.isShowContent(content, true);
      }
      return true; // Return true for all the content except collection mimeType
    } else if (content.mimeType && this.isSameMimeType(content)) {
      return true;
    } else if (content.mimeType === MimeTypeMasterData.COLLECTION) {
      return this.isShowContent(content, false);
    } else {
      return false;
    }
  }

  private isShowContent(content, isActiveFilterAll) {
    if (content.mimeTypesCount && !isActiveFilterAll) {
      return this.isSameMimeTypeInChildren(content.mimeTypesCount, this.activeMimeTypeFilter);
    } else if (this.isChildrenPresent(content)) {
      const contentList = this.flattenDeep(content.children);
      return isActiveFilterAll ? contentList.some((c) => c.mimeType !== MimeTypeMasterData.COLLECTION) :
        contentList.some((c) => this.isSameMimeType(c));
    } else {
      return false;
    }
  }

  public onTocCardClick(event) {
    const rollup = this.getRollup(this.tocData, event.data.sbUniqueIdentifier);
    if (rollup.length) {
      rollup.pop();
    }
    this.tocCardClick.emit({ ...event, rollup });
  }

  public collapsedChangeHandler(collapsed: boolean, item: AccordionItemComponent) {
    if (this.expandMode === 'single' && !collapsed) {
      this.accordionItems.filter(i => i !== item).forEach((i) => {
        if (i.expanded) { i.expanded = false; }
      });
    }
  }

  private firstNonCollectionContent(contents) {
    return contents.find((content) => content.mimeType !== 'application/vnd.ekstep.content-collection');
  }

  private flattenDeep(contents) {
    if (contents) {
      return contents.reduce((acc, val) => {
        if (val.children) {
          acc.push(val);
          return acc.concat(this.flattenDeep(val.children));
        } else {
          return acc.concat(val);
        }
      }, []);
    }
  }

  isExpanded(index: number, item) {
    const activeContent = item.children ? this.flattenDeep(item.children).find((child) => {
      if (this.activeContent && this.activeContent.parent) {
        return child.identifier === this.activeContent.identifier && child.parent === this.activeContent.parent;
      } else {
        return child.identifier === this.activeContent.identifier;
      }
    }) : undefined;
    return Boolean(activeContent || item && item.mimeType !== MimeTypeMasterData.COLLECTION);
  }

  isShowBody(item, index) {
    if (item) {
      const isShowAllMimeType = () => this.activeMimeTypeFilter.indexOf('all') > -1;
      const isCollection = () => item.mimeType === MimeTypeMasterData.COLLECTION;
      const isMathchesMimeType = () => this.activeMimeTypeFilter.indexOf(item.mimeType) > -1;
      const isLastContent = () => this.tocData.children.length === index + 1;

      if (this.tocData && isShowAllMimeType() || (isCollection() || isMathchesMimeType())) {
        this.isMimeTypeFilterChanged = true;
        return true;
      } else if (this.activeMimeTypeFilter.indexOf(item.mimeType) < 0 && !isLastContent()) {
        return false;
      } else if (this.activeMimeTypeFilter.indexOf(item.mimeType) < 0 && isLastContent()) {
        if (this.isMimeTypeFilterChanged) {
          return false;
        }
        this.isMimeTypeFilterChanged = false;
        return true;
      }
    }

    return false;
  }

  getRollup(tree, identifier) {
    let rollup = [tree.identifier];
    if (tree.sbUniqueIdentifier === identifier) {
      return rollup;
    }
    if (!tree.children || !tree.children.length) {
      return [];
    }
    let notDone = true;
    let childRollup: any;
    let index = 0;
    while (notDone && tree.children[index]) {
      childRollup = this.getRollup(tree.children[index], identifier);
      if (childRollup && childRollup.length) {
        notDone = false;
      }
      index++;
    }
    if (childRollup && childRollup.length) {
      rollup.push(...childRollup);
      return rollup;
    } else {
      return [];
    }
  }

  createUniqueId(tocData, item) {
    item['sbUniqueIdentifier'] = tocData.identifier + '_' + item.identifier;
  }

  /**
   * @since #SH-362
   * @param item - selected children data.
   * @description - It will despatch an event on individual checkbox click
   */
  onItemSelect(item) {
    this.selectedItem.emit({data: item});
  }

  /**
   * @since #SH-362
   * @param isSelectAll - boolean, which will be true/false if 'Select all checkbox is checked/unchecked
   * @description - this method will mark every children of tocData object with an additional variable -
   *                selected: true/false based on the value of 'isSelectAll' and also despatch an event
   *                with the data.
   */
  selectAllItems(isSelectAll: boolean) {
    this.tocData['children'].forEach(item => {
      item.selected = isSelectAll;
    });
    this.selectedItem.emit({selectAll: isSelectAll, data: this.tocData['children']});
  }

  onPlayButtonClick(event) {
    const rollup = this.getRollup(this.tocData, event.data.sbUniqueIdentifier);
    if (rollup.length) {
      rollup.pop();
    }
    this.playButtonClick.emit({ ...event, rollup });
  }

  isFlattenedType(content) {
    if (!(this.type === TocCardType.TRACKABLE) ||
      !((content.contentData && content.contentData.trackable && content.contentData.trackable.enabled === 'Yes') ||
      (content.trackable && content.trackable.enabled === 'Yes'))) {
      return FlattenedType.EXPAND;
    } else if (this.type === TocCardType.TRACKABLE &&
      ((content.contentData && content.contentData.trackable && content.contentData.trackable.enabled === 'Yes') ||
        (content.trackable && content.trackable.enabled === 'Yes'))) {
      return FlattenedType.COLLAPSE;
    }
    return '';
  }

}
