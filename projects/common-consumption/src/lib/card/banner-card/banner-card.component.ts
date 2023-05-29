import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IContent, ICardClick, PlatformType } from '../models';


@Component({
  selector: 'sb-banner-card-hlist',
  templateUrl: './banner-card.component.html',
  styleUrls: ['./banner-card.component.scss']
})
export class BannerCardComponent {

  @Input() backGround: string;
  @Input() text: string;
  @Input() bannerList: any;
  @Input() secondaryBanner: false;
  @Input() platform = PlatformType.MOBILE;
  @Output() cardClick: EventEmitter<ICardClick> = new EventEmitter();
  @Input() isLoading:boolean;

  onClick(event: MouseEvent, data) {
    this.cardClick.emit({ event: event, data: data });
  }
}
