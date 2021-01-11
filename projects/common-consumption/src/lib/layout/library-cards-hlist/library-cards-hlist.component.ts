import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { defaultLibraryCardsGrid } from '../library-cards.data';
import { LibraryCardTypes, ICardClick, ButtonPosition } from '../../card/models';
import { staticContent } from './library-cards-hlist.data';

@Component({
    selector: 'sb-library-cards-hlist',
    templateUrl: './library-cards-hlist.component.html',
    styleUrls: ['./library-cards-hlist.component.scss']
})

export class LibraryCardsHlistComponent {
    @Input() contentList = staticContent;
    @Input() title: string;
    @Input() viewMoreButtonText: string = defaultLibraryCardsGrid.viewMoreButtonText;
    @Input() maxCardCount: number = 10;
    @Input() isLoading: boolean = true;
    @Input() isMenu: boolean = false;
    @Input() layoutConfig: any;
    @Input() multiRow: false

    @Input() isMobile = false;
    @Input() isOffline = false;
    @Input() type: LibraryCardTypes = LibraryCardTypes.DESKTOP_TEXTBOOK;
    @Input() moreInfoLabel = 'Medium';
    @Input() section = '';
    @Input('hover-template') gridTemplate: TemplateRef<any>;
    @Input() btnlabel = '';
    @Input() btnicon = '';
    @Input() indexToDisplay:number;
    @Input() isSelected = false;
    @Input() viewMoreButtonPosition: ButtonPosition = ButtonPosition.TOP

    @Output() viewMoreClick: EventEmitter<MouseEvent> = new EventEmitter();
    @Output() cardClick: EventEmitter<any> = new EventEmitter();
    @Output() menuClick: EventEmitter<any> = new EventEmitter();

    get LibraryCardTypes() { return LibraryCardTypes; }
    get ButtonPosition() { return ButtonPosition; }

    onViewMoreClick(event) {
        this.viewMoreClick.emit(event);
    }

    onCardClick(event, index) {
        this.cardClick.emit({ 'data': event.data, 'index': index });
    }

    onMenuClick(event: ICardClick) {
        this.menuClick.emit(event);
    }

    range(maxCardCounter) {
        return  new Array(maxCardCounter);
    }

}
