import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sb-library-cards-stack',
  templateUrl: './library-cards-stack.component.html',
  styleUrls: ['./library-cards-stack.component.scss']
})
export class LibraryCardsStackComponent implements OnInit {

  @Input() contentList;
  @Input() title: string;
  @Input() isOffline = false;
  @Input() viewMoreButtonText = 'View More';
  @Input() maxCardCount: number;
  @Input() defaultImg = '';


  @Output() buttonClick = new EventEmitter();
  @Output() cardClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  showAllList(event) {
    this.buttonClick.emit(event);
  }

  emitCardClick(event, index) {
    console.log('inside library emit card click', event);
    this.cardClick.emit({'data': event.data, 'index': index});
  }

}
