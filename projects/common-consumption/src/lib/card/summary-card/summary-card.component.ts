import { Component, Input, OnInit } from '@angular/core';

interface CardInfo {
  iconUrl: string;
  title: string;
  count: string;
  commonIconUrl: string;
}

@Component({
  selector: 'summary-card',
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.scss']
})
export class SummaryCardComponent implements OnInit {
  @Input() cardInfo: CardInfo;
  constructor() { }
  ngOnInit(): void {
    console.log(this.cardInfo);
  }

}
