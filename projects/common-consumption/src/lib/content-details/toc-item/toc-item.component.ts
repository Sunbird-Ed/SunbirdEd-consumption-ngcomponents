import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef,
OnChanges, ViewChild, ElementRef, AfterViewChecked, QueryList, ViewChildren } from '@angular/core';
import { IContent } from '../../card/models';
import { MimeTypePipe, MimeTypeMasterData } from '../../pipes-module/mime-type';

@Component({
  selector: 'sb-toc-item',
  templateUrl: './toc-item.component.html',
  styleUrls: ['./toc-item.component.scss'],
  providers: [MimeTypePipe]
})
export class TocItemComponent implements OnInit, OnChanges, AfterViewChecked {
  @Input() tocData;
  @Input() activeMimeTypeFilter = ['all'];
  private _activeMimeTypeFilter = ['all'];
  @ViewChild('chapter') divs: QueryList<any>;
  @ViewChildren('chapterContainer') chapterContainer: QueryList<any>;

  @Input() activeContent;
  @Output() tocCardClick: EventEmitter<any> = new EventEmitter();

  constructor(
    private changeDetectionRef: ChangeDetectorRef,
    private mimeTypePipe: MimeTypePipe
  ) { }

  ngOnInit() {
    if (!this.activeContent) {
      this.activeContent = this.firstNonCollectionContent(this.tocData);
    }
  }

  ngOnChanges(changes) {
  }

  ngAfterViewChecked() {
    // this.checkForChildren();
  }

  checkForChildren() {
    this.chapterContainer.changes.subscribe((changes) => {
      let chapterElements = this.divs.toArray();
      if (chapterElements && chapterElements.length) {
        for (const item of chapterElements) {
          console.log(item);
          if (item.nativeElement.innerHTML.indexOf('sbchapter__item') < 0) {
            item.nativeElement.remove();
          }
        }
      }
    });
  }

  hasMimeType(activeMimeType: string[], mimeType: string, content): boolean {
    if (!activeMimeType) {
      return true;
    } else {
      if (activeMimeType.indexOf('all') > -1) {
        // if (content.contentData.mimeType === MimeType.COLLECTION && !content.children) {
        //     return false;
        // }
        return true;
      }
      return !!activeMimeType.find(m => m === mimeType);
    }
  }

  filterChildren(content) {
    console.log('filterChildren : ');
    console.log('content: ', content);
    console.log(content.children.filter((c) => this.mimeTypePipe.transform(c, this.activeMimeTypeFilter)));
    if (content.mimeType === MimeTypeMasterData.COLLECTION && content.children && content.children.length){
      return content.children.filter((c) => this.mimeTypePipe.transform(c, this.activeMimeTypeFilter));
    }
    // return content.children.filter((c) => this.mimeTypePipe.transform(c, this.activeMimeTypeFilter));
  }

  onTocCardClick(event) {
    this.tocCardClick.emit({ ...event });
  }

  collapsedChangeHandler(event) {
  }

  private firstNonCollectionContent(content, filter?: string[]) {
      if (!content.children || !content.children.length) {
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
}
