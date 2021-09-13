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
    displaySubject = '';
    board = '';
    medium = '';
    gradeLevel = '';

    ngOnInit() {
        this.fetchBMGS();
        this.arrangeFrameworkDetails();
    }

    fetchBMGS () {
        this.content['se_subjects'] = this.content.se_subjects ? this.content.se_subjects : this.content.subject;
        this.content['se_boards'] = this.content.se_boards ? this.content.se_boards : this.content.board;
        this.content['se_mediums'] = this.content.se_mediums ? this.content.se_mediums : this.content.medium;
        this.content['se_gradeLevels'] = this.content.se_gradeLevels ? this.content.se_gradeLevels : this.content.gradeLevel;
        this.displaySubject += this.content.se_subjects.length > 1 ?
        (this.content.se_subjects[0] + '...+' + (this.content.se_subjects.length - 1).toString()) : this.content.se_subjects[0];

        this.board += this.content.se_boards.length > 1 ?
        (this.content.se_boards[0] + '...+' + (this.content.se_boards.length - 1).toString()) : this.content.se_boards[0];

        this.medium += this.content.se_mediums.length > 1 ?
        (this.content.se_mediums[0] + '...+' + (this.content.se_mediums.length - 1).toString()) : this.content.se_mediums[0];

        this.gradeLevel += this.content.se_gradeLevels.length > 1 ?
        (this.content.se_gradeLevels[0] + '...+' + (this.content.se_gradeLevels.length - 1).toString()) : this.content.se_gradeLevels[0];
    }

    ngAfterViewInit(): void {
    }

    onClick(event: MouseEvent) {
        this.cardClick.emit({ event: event, data: this.content });
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
 
    getClassForImage() {
        if(this.layoutConfig!=null && this.layoutConfig.cardImgStyle != null) {
            return "sb--card__img sb--card__image-pos-"+this.layoutConfig.cardImgStyle;
        } else {
            return "sb--card__img sb--card__image-pos";
        }

    }
}
