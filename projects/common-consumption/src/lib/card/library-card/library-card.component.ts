import { IContent, LibraryCardTypes, ICardClick, IEnterKeyPress } from './../models';
import { Component, Input, OnInit, EventEmitter, Output, TemplateRef, AfterViewInit } from '@angular/core';
import { staticContent } from '../library-card/library-card.data';
@Component({
    selector: 'sb-library-card',
    templateUrl: './library-card.component.html',
    styleUrls: ['./library-card.component.scss'],
    standalone: false
})
export class LibraryCardComponent implements OnInit, AfterViewInit {

    @Input() content: IContent|any = staticContent;
    @Input() categoryKeys = [];
    @Input() contentList: any;
    @Input() isMobile = false;
    @Input() isOffline = false;
    @Input() cardImg = '';
    @Input() type: LibraryCardTypes = LibraryCardTypes.DESKTOP_TEXTBOOK;
    @Input() moreInfoLabel = 'Medium';
    @Input() section = '';
    @Input() isLoading:boolean;
    @Input('hover-template') gridTemplate: TemplateRef<any>;
    @Input() btnlabel = '';
    @Input() btnicon = '';
    @Input() isMenu: boolean = false;
    @Input() layoutConfig:any;
    @Input() indexToDisplay:number;
    @Input() isSelected = false;

    @Output() cardClick: EventEmitter<ICardClick> = new EventEmitter();
    @Output() menuClick: EventEmitter<ICardClick> = new EventEmitter();
    @Output() enterKey: EventEmitter<IEnterKeyPress> = new EventEmitter();
    categoryValues = [];
    publisher: any;

    get LibraryCardTypes() { return LibraryCardTypes; }

    ngOnInit() {
        this.fetchFrameworkDetails();
    }

    ngAfterViewInit(): void {
    }

    onClick(event: MouseEvent) {
        this.cardClick.emit({ event: event, data: this.content });
    }
    onMenuClick(event: MouseEvent) {
        this.menuClick.emit({ event: event, data: this.content });
    }
    onEnterKeyPress(event: KeyboardEvent) {
        this.enterKey.emit({ event, data: this.content });
    }

    test() {

    }

    getFormattedData(frameworkData) {
        if (typeof frameworkData === 'string') {
            return [[frameworkData]];
        } else if (Array.isArray(frameworkData)) {
            return [frameworkData];
        }
        return [];
    }

    fetchFrameworkDetails() {
        this.categoryValues = [];

        this.categoryKeys.forEach((data) => {
            if (data.label) {
                let code = this.content[data.alternativeCode] || this.content[data.code];
                let formattedValue = this.getFormattedData(code);
                let capitalizedLabel = data.label.charAt(0).toUpperCase() + data.label.slice(1);

                this.categoryValues.push({
                    label: capitalizedLabel,
                    value: formattedValue
                });
            } else {
                this.publisher = data;
            }
        });
    }
}
