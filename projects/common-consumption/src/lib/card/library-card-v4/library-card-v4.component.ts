import { Component, OnInit, Input, Output, EventEmitter, TemplateRef, AfterViewInit } from '@angular/core';
import { IContent, LibraryCardTypes, ICardClick } from '../models';


@Component({
  selector: 'sb-library-card-v4',
  templateUrl: './library-card-v4.component.html',
  styleUrls: ['./library-card-v4.component.scss','../library-card/library-card.component.scss']
})
export class LibraryCardV4Component implements OnInit, AfterViewInit {

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
    @Input() isMenu = false;
    @Input() layoutConfig: any;
    @Input() indexToDisplay: number;
    @Input() svgToDisplay;
    @Input() isSelected = false;

    @Output() cardClick: EventEmitter<ICardClick> = new EventEmitter();

    get LibraryCardTypes() { return LibraryCardTypes; }
    frameworkDetailsList = [];
    displaySubject = [];
    board = [];
    medium = [];
    gradeLevel = [];

    ngOnInit() {
        this.fetchBMGS();
        this.arrangeFrameworkDetails();
    }

    fetchBMGS () {
        this.content['se_subjects'] = this.content.se_subjects ? this.content.se_subjects : this.content.subject;
        this.content['se_boards'] = this.content.se_boards ? this.content.se_boards : this.content.board;
        this.content['se_mediums'] = this.content.se_mediums ? this.content.se_mediums : this.content.medium;
        this.content['se_gradeLevels'] = this.content.se_gradeLevels ? this.content.se_gradeLevels : this.content.gradeLevel;
    }

    ngAfterViewInit(): void {
    }

    onClick(event: MouseEvent) {
        this.cardClick.emit({ event: event, data: this.content });
    }

    arrangeFrameworkDetails() {
        this.board = this.getFormatedData(this.content.board);
        this.medium = this.getFormatedData(this.content.medium);
        this.gradeLevel = this.getFormatedData(this.content.gradeLevel);
        this.displaySubject = this.getFormatedData(this.content.se_subjects);
    }

    getFormatedData(frameworkData){
        if (typeof frameworkData === 'string') {
            return [[frameworkData]];
        } else if (Array.isArray(frameworkData)) {
            return [frameworkData];
        }
        return [];
    }
 
    getClassForImage() {
        if(this.layoutConfig!=null && this.layoutConfig.cardImgStyle != null) {
            return "sb--card__img sb--card__image-pos-"+this.layoutConfig.cardImgStyle;
        } else {
            return "sb--card__img sb--card__image-pos";
        }
    }
}
