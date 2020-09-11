import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { defaultLibraryCardsGrid } from '../library-cards.data';
import { IContent, LibraryCardTypes, LibraryCardGridTypes } from '../../card/models';
import { IViewMoreClick, ICardClick } from '../models';

@Component({
    selector: 'sb-library-cards-grid',
    templateUrl: './library-cards-grid.component.html',
    styleUrls: ['./library-cards-grid.component.scss']
})
export class LibraryCardsGridComponent {

    /* Title for the grid */
    @Input() title: string = defaultLibraryCardsGrid.title;
    @Input() showBadgeCount = true;
    @Input() showTitleIcon = true;
    @Input() contentList: Array<IContent|any> = defaultLibraryCardsGrid.contentList;
    @Input() type: LibraryCardGridTypes;
    @Input() hoverData = [];

    @Input() layoutConfig: any;

    /* Max card count to be shown */
    @Input() maxCardCount = defaultLibraryCardsGrid.maxCardCount;
    @Input() viewMoreButtonText = defaultLibraryCardsGrid.viewMoreButtonText;
    @Input('hover-template') gridTemplate: TemplateRef<any>;

    @Input() isLoading:boolean;

    /* Show Menu on each card */
    @Input() isMenu = false;

    @Output() viewMoreClick: EventEmitter<IViewMoreClick> = new EventEmitter<IViewMoreClick>();
    @Output() cardClick: EventEmitter<ICardClick> = new EventEmitter<ICardClick>();
    @Output() hoverActionClick: EventEmitter<any> = new EventEmitter<any>();
    @Output() menuClick: EventEmitter<ICardClick> = new EventEmitter();


    get LibraryCardTypes() { return LibraryCardTypes; }
    get LibraryCardGridTypes() { return LibraryCardGridTypes; }

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

    hoverActionClicked(event) {
        this.hoverActionClick.emit(event);
    }
    range(maxCardCounter) {
        return  new Array(maxCardCounter);
    }
    onCardMenuClick(event) {
        this.menuClick.emit(event);
    }
}
