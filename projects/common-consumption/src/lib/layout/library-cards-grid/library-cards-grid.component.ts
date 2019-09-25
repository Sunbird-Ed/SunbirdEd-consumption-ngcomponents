import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { defaultLibraryCardsGrid } from './library-cards-grid.data';

@Component({
  selector: 'sb-library-cards-grid',
  templateUrl: './library-cards-grid.component.html',
  styleUrls: ['./library-cards-grid.component.scss']
})
export class LibraryCardsGridComponent implements OnInit {
  @Input() title = defaultLibraryCardsGrid.title;
  @Input() contentList = defaultLibraryCardsGrid.contentList;
  @Input() cardDisplayCount = defaultLibraryCardsGrid.cardDisplayCount;
  @Input() viewMoreButtonText = defaultLibraryCardsGrid.viewMoreButtonText;

  @Output() buttonClick = new EventEmitter();
  @Output() cardClick = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  onShowAllList(event) {
    this.buttonClick.emit(event);
  }
  onCardClick(event) {
    this.cardClick.emit(event);
  }

}
