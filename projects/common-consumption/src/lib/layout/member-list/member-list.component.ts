import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ICardClick } from '../models';

@Component({
  selector: 'sb-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {

  @Input() memberList: any;
  @Input() isMenu: boolean = false;
  @Output() menuClick: EventEmitter<ICardClick> = new EventEmitter();
  @Output() cardClick: EventEmitter<ICardClick> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onCardClick(event: MouseEvent,data:any) {
    this.cardClick.emit({ event: event, data: {data} });
  }
  onMenuClick(event: MouseEvent,data:any) {
    this.menuClick.emit({ event: event,data: {data} });
  }

}
