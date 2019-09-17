import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sb-library-cards-stack',
  templateUrl: './library-cards-stack.component.html',
  styleUrls: ['./library-cards-stack.component.scss']
})
export class LibraryCardsStackComponent implements OnInit {

  @Input() contentList;
  @Input() isOffline = false;

  constructor() { }

  ngOnInit() {
  }

}
