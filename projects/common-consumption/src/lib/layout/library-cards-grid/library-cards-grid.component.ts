import { Component, Input, Output, EventEmitter } from '@angular/core';
import { defaultLibraryCardsGrid } from '../library-cards.data';
import { IContent, LibraryCardTypes } from '../../card/models';
import { IViewMoreClick, ICardClick } from '../models';

@Component({
    selector: 'sb-library-cards-grid',
    templateUrl: './library-cards-grid.component.html',
    styleUrls: ['./library-cards-grid.component.scss']
})
export class LibraryCardsGridComponent {

    /* Title for the grid */
    @Input() title: string = defaultLibraryCardsGrid.title;
    @Input() contentList: Array<IContent> = defaultLibraryCardsGrid.contentList;

    /* Max card count to be shown */
    @Input() maxCardCount = defaultLibraryCardsGrid.maxCardCount;
    @Input() viewMoreButtonText = defaultLibraryCardsGrid.viewMoreButtonText;

    @Output() viewMoreClick: EventEmitter<IViewMoreClick> = new EventEmitter<IViewMoreClick>();
    @Output() cardClick: EventEmitter<ICardClick> = new EventEmitter<ICardClick>();

    get LibraryCardTypes() { return LibraryCardTypes; }

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
}
