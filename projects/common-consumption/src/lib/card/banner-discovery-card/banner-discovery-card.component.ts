import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IContent, ICardClick } from '../models';


@Component({
  selector: 'sb-banner-discovery-card-hlist',
  templateUrl: './banner-discovery-card.component.html',
  styleUrls: ['./banner-discovery-card.component.scss']
})
export class BannerDiscoveryCardComponent {

  @Input() backGround: string;
  @Input() text: string;
  @Input() bannerList: any;
  @Output() cardClick: EventEmitter<ICardClick> = new EventEmitter();

  onClick(event: MouseEvent, data) {
    this.cardClick.emit({ event: event, data: data });
  }
}
