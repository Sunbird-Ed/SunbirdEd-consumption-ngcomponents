import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IContent, ICardClick } from '../models';


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
  @Output() cardClick: EventEmitter<ICardClick> = new EventEmitter();

  onClick(event: MouseEvent, data) {
    this.cardClick.emit({ event: event, data: data });
  }
}
