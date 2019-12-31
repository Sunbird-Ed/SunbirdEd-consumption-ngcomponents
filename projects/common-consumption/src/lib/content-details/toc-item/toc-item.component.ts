import {
  Component, OnInit, Input, Output, EventEmitter, ViewChild, QueryList, ViewChildren
} from '@angular/core';
import { MimeTypePipe, MimeTypeMasterData } from '../../pipes-module/mime-type';

@Component({
  selector: 'sb-toc-item',
  templateUrl: './toc-item.component.html',
  styleUrls: ['./toc-item.component.scss'],
  providers: [MimeTypePipe]
})
export class TocItemComponent implements OnInit {
  @Input() tocData;
  @Input() activeMimeTypeFilter = ['all'];
  @Input() noContentMessage = 'No content available';
  @ViewChild('chapter') divs: QueryList<any>;
  @ViewChildren('chapterContainer') chapterContainer: QueryList<any>;

  @Input() activeContent;
  @Output() tocCardClick: EventEmitter<any> = new EventEmitter();

  private isSameMimeTypeInChildren = ((mimeTypesCount, activeMimeType) => {
    const contentMimeType = Object.keys(JSON.parse(mimeTypesCount));
    return Boolean(activeMimeType.filter(value => contentMimeType.includes(value)).length);
  });
  private isSameMimeType = (currentContent) => this.activeMimeTypeFilter.find(mimeType => mimeType === currentContent.mimeType);
  private isChildrenPresent = (currentContent) => Boolean(currentContent.children && currentContent.children.length);

  constructor() { }

  ngOnInit() {
    if (!this.activeContent) {
      this.activeContent = this.firstNonCollectionContent(this.tocData);
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

  private firstNonCollectionContent(content, filter?: string[]) {
    if (content === undefined || (content && !content.children) || (content && content.children && !content.children.length)) {
      return undefined;
    }

    for (const c of content.children) {
      if (c.mimeType === MimeTypeMasterData.COLLECTION) {
        return this.firstNonCollectionContent(c, filter);
      } else if (filter && !filter.includes(c.mimeType)) {
        continue;
      }

      return c;
    }
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

}
