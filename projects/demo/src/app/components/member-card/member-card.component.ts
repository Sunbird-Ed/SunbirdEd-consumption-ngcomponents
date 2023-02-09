import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent implements OnInit {

  memberCardConfig = { size: 'large', isBold: true, isSelectable: true, view: 'vertical' };
  memberCardConfig1 = { size: 'medium', isBold: false, isSelectable: false, view: 'horizontal' };
  member = {
    title:"sample",
    initial:"V",
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
