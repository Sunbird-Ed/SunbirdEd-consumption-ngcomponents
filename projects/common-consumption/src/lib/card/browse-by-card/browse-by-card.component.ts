import { Component, Input, OnInit } from '@angular/core';

interface CardInfo {
  iconUrl: string;
  title: string;
}

@Component({
  selector: 'browse-by-card',
  templateUrl: './browse-by-card.component.html',
  styleUrls: ['./browse-by-card.component.scss']
})
export class BrowseByCardComponent implements OnInit {

  @Input() cardInfo: CardInfo;
  constructor() { }

  ngOnInit(): void {
  }

}
