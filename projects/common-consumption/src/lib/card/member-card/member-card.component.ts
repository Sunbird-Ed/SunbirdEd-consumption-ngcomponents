import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sb-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent implements OnInit {

  paletteList:any = ["#FE0030","#7B1FA2","#0097A7","#7B1FA2",
  "#F57C00","#1976D2","#CDDC39","#FE0030","#F57C00","#388E3C"];

  constructor() { }

  ngOnInit() {
  }

  fetchStyle(index:number) {
    if(index > 10) {
      index = index % 10;
    }
    return {
      'border-color': this.paletteList[index],
      'color': this.paletteList[index]
    };
  }

}
