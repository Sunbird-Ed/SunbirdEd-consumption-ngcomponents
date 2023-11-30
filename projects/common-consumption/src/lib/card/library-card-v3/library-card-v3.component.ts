import { Component, OnInit, Input, Output, EventEmitter, TemplateRef, AfterViewInit } from '@angular/core';
import { IContent, LibraryCardTypes, ICardClick, IEnterKeyPress } from '../models';


@Component({
  selector: 'sb-library-card-v3',
  templateUrl: './library-card-v3.component.html',
  styleUrls: ['./library-card-v3.component.scss','../library-card/library-card.component.scss']
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
    @Input() categoryKeys= [];

    @Output() cardClick: EventEmitter<ICardClick> = new EventEmitter();
    @Output() menuClick: EventEmitter<ICardClick> = new EventEmitter();
    @Output() enterKeyPress: EventEmitter<IEnterKeyPress> = new EventEmitter();

    get LibraryCardTypes() { return LibraryCardTypes; }
    frameworkDetailsList = [];
    publisher: any;

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

    getFormatedData(frameworkData){
        if (typeof frameworkData === 'string') {
            return [[frameworkData]];
        } else if (Array.isArray(frameworkData)) {
            return [frameworkData];
        }
        return [];
    }

    arrangeFrameworkDetails() {
        this.frameworkDetailsList = [];
        this.categoryKeys.forEach((data) => {
            if (data.label) {
                let code = (this.content[data.alterNativeCode] || this.content[data.code])
                this.frameworkDetailsList.push(this.getFormatedData(code));
            } else {
                this.publisher = data;
            }
        });
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
