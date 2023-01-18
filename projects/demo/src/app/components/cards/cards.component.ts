import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  v3LibraryCard = {
    content: {
      name: "Testing here---"
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
