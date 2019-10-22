import { IContent } from './../models';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { staticContent } from './library-card.data';

export interface ICardClick {
    event: MouseEvent;
    data: IContent;
}

@Component({
    selector: 'sb-library-card',
    templateUrl: './library-card.component.html',
    styleUrls: ['./library-card.component.scss']
})
export class LibraryCardComponent implements OnInit {

    @Input() content: IContent = staticContent;
    @Input() isMobile = false;
    @Input() isOffline = false;
    @Input() defaultImg = '';
    @Input() offlineImg = '';

    @Output() cardClick: EventEmitter<ICardClick> = new EventEmitter();

    ngOnInit() {
        console.log('content', this.content);
    }

    onClick(event: MouseEvent) {
        this.cardClick.emit({ event: event, data: this.content });
    }
}
