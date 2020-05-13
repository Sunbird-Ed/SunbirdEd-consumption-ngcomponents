import { Component, OnInit, Input, EventEmitter, Output, QueryList, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import {COMMON_CONSUMPTION_CONSTANTS} from '../../common-consumption.constants';

@Component({
  selector: 'sb-toc-card',
  templateUrl: './toc-card.component.html',
  styleUrls: ['./toc-card.component.scss']
})
export class TocCardComponent implements OnInit {
  @ViewChild('card') card: ElementRef;
  @Input() content;
  @Input() activeContent;
  @Input() isCourseContent;
  @Output() tocCardClick: EventEmitter<any> = new EventEmitter();
  fallbackImg = COMMON_CONSUMPTION_CONSTANTS.TOC_CARD_FALLBACK_IMG ;

  ngOnInit() {
    setTimeout(() => {
      if (this.activeContent && this.activeContent.sbUniqueIdentifier === this.content.sbUniqueIdentifier) {
        this.tocCardClick.emit({ event: {}, data: { ...this.content }});
      }
    });
  }

  public async onTocCardClick(event) {
    if (this.activeContent && this.activeContent.sbUniqueIdentifier !== this.content.sbUniqueIdentifier) {
      this.tocCardClick.emit({ event: event, data: { ...this.content } });
    }
  }
}
