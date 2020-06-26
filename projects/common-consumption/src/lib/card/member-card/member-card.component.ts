import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICardClick } from '../models';
import { config } from 'rxjs';

@Component({
  selector: 'sb-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent implements OnInit {

  paletteList:any = ["#FE0030","#7B1FA2","#0097A7","#7B1FA2","#F57C00","#1976D2","#CDDC39","#FE0030","#F57C00","#388E3C"];

  @Input() title:string = "Dummy";
  @Input() isAdmin: boolean = false;
  @Input() isMenu: boolean = false;
  @Input() indexOfMember: number = 0;
  @Input() initial: string = "D";
  @Input() cardImg: string = "";
  @Input() identifier: string = "1";
  @Input() selected: boolean = false;
  @Input() progressDisplay: string;
  @Input() config={size:'medium', isBold:false, isSelectable:true, view:"vertical"}
  @Output() menuClick: EventEmitter<ICardClick> = new EventEmitter();
  @Output() cardClick: EventEmitter<ICardClick> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if(this.config.view == "vertical") {
      this.config.isSelectable = false;
    }
    if(this.initial!=null) {
    } else {
      this.initial = "D"
    }
    if(this.title!=null) {
    } else {
      this.title = "Dummy"
    }
  }

  fetchStyle() {
    if(this.indexOfMember > 10) {
      this.indexOfMember = this.indexOfMember % 10;
    }
    return {
      'border-color': this.paletteList[this.indexOfMember],
      'color': this.paletteList[this.indexOfMember]
    };
  }
  onClick(event: MouseEvent) {
    this.selected = !this.selected;
    this.cardClick.emit({ event: event, data: {title: this.title,identifier: this.identifier} });
 }
 onMenuClick(event: MouseEvent) {
  this.menuClick.emit({ event: event, data: {identifier:this.identifier} });
 }

}