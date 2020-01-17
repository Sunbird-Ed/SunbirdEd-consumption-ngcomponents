import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MimeTypePipe } from '../../pipes-module/mime-type';

@Component({
  selector: 'sb-toc-child-item',
  templateUrl: './toc-child-item.component.html',
  styleUrls: ['./toc-child-item.component.scss']
})
export class TocChildItemComponent implements OnInit {
  @Input() childData;
  @Input() activeContent;
  @Input() activeMimeTypeFilter = ['all'];

  @Output() tocCardClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
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

  tocCardClickHandler(event) {
    this.tocCardClick.emit({ ...event });
  }

  createUniqueId(tocData, item) {
    item['sbUniqueIdentifier'] = tocData.identifier + '_' + item.identifier;
  }

}
