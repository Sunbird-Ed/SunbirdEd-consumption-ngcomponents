import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICardClick } from '../../layout/models';
import { groupData } from './group-data';
@Component({
  selector: 'sb-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.scss','../library-card/library-card.component.scss']
})
export class GroupCardComponent implements OnInit {

  @Input() group: any = groupData;
  @Input() cardBgColor;
  @Input() cardTitleColor;
  @Input() title;
  @Input() description;
  @Input() isLoading:boolean;
  @Input() theme: string;
  @Input() isMobile;
  @Input() isAdmin;
  @Input() initial: string;
  @Input() isSuspended = false;
  @Input() suspendBadgeText = 'Suspended';

  @Output() cardClick: EventEmitter<ICardClick> = new EventEmitter();

  constructor() { }

  ngOnInit() {    
    this.initial = this.group.initial!=null?this.group.initial:"";
    this.cardBgColor = this.group.cardBgColor!=null?this.group.cardBgColor:"#b3ebd7";
    this.cardTitleColor = this.group.cardTitleColor!=null?this.group.cardTitleColor:"green";
  }

  onClick(event: MouseEvent) {
    this.cardClick.emit({ event: event, data: this.group });
  }
  fetchStyle() {
    return {
      "background-color":this.cardBgColor!=null?this.cardBgColor:"#b3ebd7"
    };
  }
  fetchInitialStyle() {
    return {
      "color":this.cardTitleColor!=null?this.cardTitleColor:"green"
    };
  }
}
