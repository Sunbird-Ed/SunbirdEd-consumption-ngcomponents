import { Component, OnInit, Input, Output, EventEmitter, TemplateRef, AfterViewInit } from '@angular/core';
import { IContent, LibraryCardTypes, ICardClick, IEnterKeyPress } from '../models';


@Component({
  selector: 'sb-library-card-v3',
  templateUrl: './library-card-v3.component.html',
styleUrls: ['./library-card-v3.component.scss']
})
export class LibraryCardV3Component implements OnInit, AfterViewInit {

    @Input() content: IContent|any;
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
    @Input() layoutConfig: any;
    @Input() indexToDisplay: number;
    @Input() svgToDisplay;
    @Input() isSelected = false;

    @Output() cardClick: EventEmitter<ICardClick> = new EventEmitter();
    @Output() menuClick: EventEmitter<ICardClick> = new EventEmitter();
    @Output() enterKeyPress: EventEmitter<IEnterKeyPress> = new EventEmitter();

    get LibraryCardTypes() { return LibraryCardTypes; }
    frameworkDetailsList = [];

    ngOnInit() {
        this.fetchSvg();
        this.arrangeFrameworkDetails();
    }

    ngAfterViewInit(): void {
    }

    onClick(event: MouseEvent) {
        this.cardClick.emit({ event: event, data: this.content });
    }
    onEnterKeyPress(event: KeyboardEvent) {
        this.enterKeyPress.emit({ event: event, data: this.content });
    }

    arrangeFrameworkDetails() {
        this.frameworkDetailsList = [];
        if (typeof this.content.board === 'string') {
            this.frameworkDetailsList.push([this.content.board]);
        } else if (Array.isArray(this.content.board)) {
            this.frameworkDetailsList.push(this.content.board);
        }

        if (typeof this.content.medium === 'string') {
            this.frameworkDetailsList.push([this.content.medium]);
        } else if (Array.isArray(this.content.medium)) {
            this.frameworkDetailsList.push(this.content.medium  );
        }

        if (typeof this.content.gradeLevel === 'string') {
            this.frameworkDetailsList.push([this.content.gradeLevel]);
        } else if (Array.isArray(this.content.gradeLevel)) {
            this.frameworkDetailsList.push(this.content.gradeLevel);
        }
    }
   /* onMenuClick(event: MouseEvent) {
        this.menuClick.emit({ event: event, data: this.content });
    }*/
    getClassForImage() {
        if(this.layoutConfig!=null && this.layoutConfig.cardImgStyle != null) {
            return "sb--card__img sb--card__image-pos-"+this.layoutConfig.cardImgStyle;
        } else {
            return "sb--card__img sb--card__image-pos";
        }
       
    }
    fetchSvg() {
        var indexToDisplay = this.indexToDisplay!=null ? (this.indexToDisplay % 9)+1:2;
        this.svgToDisplay =  "assets/common-consumption/images/abstract_0"+indexToDisplay+".svg";
    }
}
