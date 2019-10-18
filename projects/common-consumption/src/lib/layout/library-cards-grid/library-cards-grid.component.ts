import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { defaultLibraryCardsGrid } from '../library-cards.data';
import { IContent } from '../../card/models';


@Component({
    selector: 'sb-library-cards-grid',
    templateUrl: './library-cards-grid.component.html',
    styleUrls: ['./library-cards-grid.component.scss']
})
export class LibraryCardsGridComponent {
    @Input() title: string = defaultLibraryCardsGrid.title;
    @Input() contentList: Array<IContent> = defaultLibraryCardsGrid.contentList;
    @Input() maxCardCount = defaultLibraryCardsGrid.maxCardCount;
    @Input() viewMoreButtonText = defaultLibraryCardsGrid.viewMoreButtonText;

    @Output() viewMoreClick: EventEmitter<MouseEvent> = new EventEmitter();
    @Output() cardClick: EventEmitter<MouseEvent> = new EventEmitter();

    onViewMoreClick(event: MouseEvent) {
        this.viewMoreClick.emit(event);
    }

    onCardClick(event: MouseEvent) {
        this.cardClick.emit(event);
    }

}
