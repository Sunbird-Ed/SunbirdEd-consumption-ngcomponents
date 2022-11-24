import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { defaultLibraryCardsGrid } from '../library-cards.data';
import { LibraryCardTypes, ICardClick } from '../../card/models';

@Component({
    selector: 'sb-library-cards-stack',
    templateUrl: './library-cards-stack.component.html',
    styleUrls: ['./library-cards-stack.component.scss']
})

export class LibraryCardsStackComponent {
    @Input() contentList = defaultLibraryCardsGrid.contentList;
    @Input() title: string;
    @Input() isOffline = false;
    @Input() viewMoreButtonText: string = defaultLibraryCardsGrid.viewMoreButtonText;
    @Input() maxCardCount: number = defaultLibraryCardsGrid.maxCardCount;
    @Input() isLoading: boolean;
    @Input() isMenu;
    @Input() layoutConfig: any;
    @Input() cardType = 'textbook';
    @Input() defaultImage: string = '';

    @Output() viewMoreClick: EventEmitter<MouseEvent> = new EventEmitter();
    @Output() cardClick: EventEmitter<any> = new EventEmitter();
    @Output() menuClick: EventEmitter<any> = new EventEmitter();

    get LibraryCardTypes() { return LibraryCardTypes; }

    showAllList(event) {
        this.viewMoreClick.emit(event);
    }

    emitCardClick(event, index) {
        this.cardClick.emit({ 'data': event.data, 'index': index });
    }

    emitMenuClick(event: ICardClick) {
        this.menuClick.emit(event);
    }

}
