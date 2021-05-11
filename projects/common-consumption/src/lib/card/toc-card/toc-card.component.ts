import { MimeTypeMasterData } from './../../pipes-module/mime-type';
import { Component, OnInit, Input, EventEmitter, Output, QueryList, ViewChild, ElementRef, Renderer2, OnChanges } from '@angular/core';
import { COMMON_CONSUMPTION_CONSTANTS } from '../../common-consumption.constants';
import { IButtonConfig, PlatformType, TocCardType } from '../models';

@Component({
  selector: 'sb-toc-card',
  templateUrl: './toc-card.component.html',
  styleUrls: ['./toc-card.component.scss']
})
export class TocCardComponent implements OnInit, OnChanges {
  @Input() content;
  @Input() activeContent;
  @Input() type: TocCardType = TocCardType.TEXTBOOK;
  @Input() contentStatus = [];
  @Input() refresh: boolean;
  @Input() playBtnConfig: IButtonConfig;
  @Input() trackableDefaultImage = '';
  @Input() platform = PlatformType.MOBILE;
  @Output() tocCardClick: EventEmitter<any> = new EventEmitter();
  @Output() playButtonClick: EventEmitter<any> = new EventEmitter();
  @Input() scoreLabel = '';
  @Input() maxAttempts;
  @Input() disabled = '';

  fallbackImg = COMMON_CONSUMPTION_CONSTANTS.TOC_CARD_FALLBACK_IMG;
  iconPathMap: any;
  isContentStarted  = false;
  isCourseCompleted = false;
  bestScoreLabel: string;
  isLastAttempt: boolean = false;
  isDisabled: boolean = false;
  get TocCardType() { return TocCardType; }
  displayScore: boolean = true;

  ngOnInit() {
    if (this.type === TocCardType.COURSE) {
      this.createIconMap();
    }
    this.getBestScore();
    setTimeout(() => {
      if (this.activeContent && this.activeContent.sbUniqueIdentifier === this.content.sbUniqueIdentifier) {
        this.tocCardClick.emit({ event: {}, data: { ...this.content } });
      }
    });
    if (!this.playBtnConfig) {
      this.playBtnConfig = {
        label: 'Play',
        show: false
      };
    }
    if (!this.platform) {
      this.platform = PlatformType.MOBILE;
    }
  }

  ngOnChanges(changes) {
    if (changes && changes.contentStatus) {
      if (this.type === TocCardType.COURSE) {
        this.createIconMap();
      }
      this.getBestScore();
    }
  }

  public async onTocCardClick(event) {
    if (this.isLastAttempt) {
      event.isLastAttempt = true;
      this.tocCardClick.emit({ event: event, data: { ...this.content } });
    } else if (this.isDisabled) {
      event.isDisabled = true;
      this.tocCardClick.emit({ event: event, data: { ...this.content } });
    } else if (this.activeContent && this.activeContent.sbUniqueIdentifier !== this.content.sbUniqueIdentifier) {
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

    this.isContentStarted = !!(this.contentStatus.find((item) => {
      if (item.contentId === this.content.identifier && item.status === 1) {
        return true;
      }
    }));

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

  getBestScore() {
    this.contentStatus.forEach((item) => {
      if (item.contentId === this.content.identifier && item.bestScore && this.scoreLabel) {
        if (this.content && this.content.hasOwnProperty('displayScore')) this.displayScore = this.content['displayScore'];
        this.bestScoreLabel = this.scoreLabel + ' ' + (Math.round(item.bestScore.totalScore*100)/100).toString() + '/' + item.bestScore.totalMaxScore.toString();
        if (this.maxAttempts && (this.maxAttempts - item.score.length === 1)) {
          this.isLastAttempt = true;
          this.isDisabled = false;
        }
        if (this.maxAttempts && (item.score.length >= this.maxAttempts)) {
          this.isDisabled = true;
          this.isLastAttempt = false;
        }
      }
    });
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

  swapCard(content) {
    if (this.platform === PlatformType.MOBILE) {
      return false;
    }
    if (this.isTrackable(content)) {
      return false;
    }
    return true;
  }

  isTrackable(content) {
    if ((content.contentData && content.contentData.trackable && content.contentData.trackable.enabled === 'Yes') ||
      (content.trackable && content.trackable.enabled === 'Yes')) {
      return true;
    }
    return false;
  }

  getContentImage(content) {
    if (this.isTrackable(content) && this.trackableDefaultImage) {
      return this.trackableDefaultImage;
    }
    return content.appIcon || (content.contentData && content.contentData.appIcon);
  }
}
