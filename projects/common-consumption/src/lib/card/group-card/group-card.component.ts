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
  @Input() cardImg;
  @Input() title;
  @Input() subTitle;
  @Input() isLoading:boolean;
  @Input() theme: string;

  @Output() cardClick: EventEmitter<ICardClick> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    
  }
  onClick(event: MouseEvent) {
    this.cardClick.emit({ event: event, data: this.group });
  }

}
