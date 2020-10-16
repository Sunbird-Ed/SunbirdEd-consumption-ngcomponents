import { MimeTypeMasterData } from './../../pipes-module/mime-type';
import { Component, OnInit, Input, EventEmitter, Output, QueryList, ViewChild, ElementRef, Renderer2, OnChanges } from '@angular/core';
import { COMMON_CONSUMPTION_CONSTANTS } from '../../common-consumption.constants';
import { IButtonConfig, TocCardType } from '../models';

@Component({
  selector: 'sb-toc-card',
  templateUrl: './toc-card.component.html',
  styleUrls: ['./toc-card.component.scss']
})
export class TocCardComponent implements OnInit {
  @Input() content;
  @Input() activeContent;
  @Input() type: TocCardType = TocCardType.TEXTBOOK;
  @Input() contentStatus = [];
  @Input() refresh: boolean;
  @Input() playBtnConfig: IButtonConfig = {
    label: 'Play',
    show: false
  };
  @Input() trackableDefaultImage = '';
  @Output() tocCardClick: EventEmitter<any> = new EventEmitter();
  @Output() playButtonClick: EventEmitter<any> = new EventEmitter();

  fallbackImg = COMMON_CONSUMPTION_CONSTANTS.TOC_CARD_FALLBACK_IMG;
  iconPathMap: any;
  isContentStarted  = false;
  isCourseCompleted = false;
  get TocCardType() { return TocCardType; }

  ngOnInit() {
    if (this.type === TocCardType.COURSE) {
      this.createIconMap();
    }
    setTimeout(() => {
      if (this.activeContent && this.activeContent.sbUniqueIdentifier === this.content.sbUniqueIdentifier) {
        this.tocCardClick.emit({ event: {}, data: { ...this.content } });
      }
    });
  }

  public async onTocCardClick(event) {
    if (this.activeContent && this.activeContent.sbUniqueIdentifier !== this.content.sbUniqueIdentifier) {
      this.tocCardClick.emit({ event: event, data: { ...this.content } });
    } else if (this.type = TocCardType.COURSE) {
      this.tocCardClick.emit({ event: event, data: { ...this.content } });
    }
  }

  createIconMap() {
    const mimeTypesData = MimeTypeMasterData;
    this.isCourseCompleted = this.contentStatus.find((item) => {
      if (item.contentId === this.content.identifier && item.status === 2) {
        return true;
      }
    });

    this.isContentStarted = this.contentStatus.find((item) => {
      if (item.contentId === this.content.identifier && item.status === 1) {
        return true;
      }
    });

    if (this.isCourseCompleted) {
      this.content.appIcon = 'assets/common-consumption/images/sprite.svg#circle-with-check-symbol';
    } else {
      this.iconPathMap = [
        [mimeTypesData.COLLECTION, 'assets/common-consumption/images/sprite.svg#doc'],
        [mimeTypesData.VIDEO, 'assets/common-consumption/images/sprite.svg#play'],
        [mimeTypesData.AUDIO, 'assets/common-consumption/images/sprite.svg#play'],
        [mimeTypesData.INTERACTIVE, 'assets/common-consumption/images/sprite.svg#touch'],
        [mimeTypesData.DOCS, 'assets/common-consumption/images/sprite.svg#doc'],
      ];
      this.content.appIcon = this.getIconPath(this.content.mimeType);
    }
  }

  getIconPath(contentMimeType: string) {
    for (const [key, value] of this.iconPathMap) {
      if (key.indexOf(contentMimeType) >= 0) {
        return value;
      }
    }
    return '';
  }

  onPlayButtonClick(event) {
    this.playButtonClick.emit({ event: event, data: { ...this.content } });
  }
}
