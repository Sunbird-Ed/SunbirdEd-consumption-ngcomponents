import {
  Component, OnInit, Input, Output, EventEmitter, ViewChild, QueryList, ViewChildren, OnChanges
} from '@angular/core';
import { MimeTypePipe, MimeTypeMasterData } from '../../pipes-module/mime-type';

@Component({
  selector: 'sb-toc-item',
  templateUrl: './toc-item.component.html',
  styleUrls: ['./toc-item.component.scss'],
  providers: [MimeTypePipe]
})
export class TocItemComponent implements OnInit, OnChanges {
  @Input() tocData;
  @Input() activeMimeTypeFilter = ['all'];
  @Input() noContentMessage = 'No content available';
  @ViewChild('chapter') divs: QueryList<any>;
  @ViewChildren('chapterContainer') chapterContainer: QueryList<any>;

  @Input() activeContent;
  @Output() tocCardClick: EventEmitter<any> = new EventEmitter();
  @Output() noContent: EventEmitter<any> = new EventEmitter();

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
    if (!this.activeContent && this.tocData && this.tocData.children) {
      const flattenDeepContents = this.flattenDeep(this.tocData.children);
      this.activeContent = this.firstNonCollectionContent(flattenDeepContents);

      if (!this.activeContent) {
        this.noContent.emit({ message: 'No Content Available' });
      }
    }
  }

  ngOnChanges(changes) {
    if (changes.activeMimeTypeFilter) {
      this.isMimeTypeFilterChanged = false;
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
    this.tocCardClick.emit({ ...event });
  }

  public collapsedChangeHandler(event) {
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
    return Boolean(index === 0 || item && item.mimeType !== MimeTypeMasterData.COLLECTION);
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
}
