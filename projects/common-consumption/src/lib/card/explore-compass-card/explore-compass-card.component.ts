import { Component, Input, OnInit } from '@angular/core';

interface CardInfo {
  iconUrl: string;
  title: string;
  content: string;
}

@Component({
  selector: 'explore-compass-card',
  templateUrl: './explore-compass-card.component.html',
  styleUrls: ['./explore-compass-card.component.scss']
})
export class ExploreCompassCardComponent implements OnInit {

  @Input() cardInfo: CardInfo;
  constructor() { }

  ngOnInit(): void {
  }

}
