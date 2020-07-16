import { Component, OnInit, Input, Output, TemplateRef, EventEmitter } from '@angular/core';
import { defaultLibraryCardsGrid } from '../library-cards.data';
import { IContent, LibraryCardTypes, CardGridTypes } from '../../card/models';
import { IViewMoreClick, ICardClick } from '../models';

@Component({
  selector: 'sb-cards-grid',
  templateUrl: './cards-grid.component.html',
  styleUrls: ['./cards-grid.component.scss','../library-cards-grid/library-cards-grid.component.scss']
})
export class CardsGridComponent {

  /* Title for the grid */
  @Input() title: string = defaultLibraryCardsGrid.title;
  @Input() contentList: Array<IContent> | any = defaultLibraryCardsGrid.contentList;
  @Input() type: CardGridTypes;
  @Input() hoverData = [];
  @Input() cardType:String = "textbook";

  /* Max card count to be shown */
  @Input() maxCardCount = defaultLibraryCardsGrid.maxCardCount;
  @Input() viewMoreButtonText = defaultLibraryCardsGrid.viewMoreButtonText;
  @Input('hover-template') gridTemplate: TemplateRef<any>;

  @Input() isLoading:boolean;
  @Input() isMenu:boolean = false;

  @Output() viewMoreClick: EventEmitter<IViewMoreClick> = new EventEmitter<IViewMoreClick>();
  @Output() menuClick: EventEmitter<IViewMoreClick> = new EventEmitter<IViewMoreClick>();
  @Output() cardClick: EventEmitter<ICardClick> = new EventEmitter<ICardClick>();
  @Output() hoverActionClick: EventEmitter<any> = new EventEmitter<any>();


  get LibraryCardTypes() { return LibraryCardTypes; }
  get CardGridTypes() { return CardGridTypes; }

  /**
   * Triggers event on `View More` Click
   * @param event HTML click event
   */
  onViewMoreClick(event: MouseEvent) {
      this.viewMoreClick.emit({ event, data: this.contentList });
  }

  /**
   * Triggers event on card click
   * @param event HTML Click event
   * @param data Content data for selected card
   */
  onCardClick(event: MouseEvent, data: IContent) {
      this.cardClick.emit({ event, data });
  }
  onMenuClick(event: MouseEvent, data: IContent) {
    this.menuClick.emit({ event, data });
 }

  hoverActionClicked(event) {
      this.hoverActionClick.emit(event);
  }
  range(maxCardCounter) {
      return  new Array(maxCardCounter);
  }

}
