import { Component, OnInit, Input, Output, EventEmitter, TemplateRef, AfterViewInit } from '@angular/core';
import { IContent, LibraryCardTypes, ICardClick, IEnterKeyPress } from '../models';


@Component({
  selector: 'sb-library-card-v4',
  templateUrl: './library-card-v4.component.html',
  styleUrls: ['./library-card-v4.component.scss','../library-card/library-card.component.scss']
})
export class LibraryCardV4Component implements OnInit, AfterViewInit {

    @Input() content: IContent|any;
    @Input() categoryKeys = [];
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
    @Output() enterKeyPress: EventEmitter<IEnterKeyPress> = new EventEmitter();

    get LibraryCardTypes() { return LibraryCardTypes; }
    categoryValues = [];
    publisher: any;

    ngOnInit() {
        this.fetchBMGS();
      //  this.arrangeFrameworkDetails();
    }

    fetchBMGS () {
        this.categoryKeys.forEach((data) => {
            if (data.identifier) {
                this.categoryValues.push(this.getFormatedData(this.content[data.code]));
            } else {
                this.publisher = data;
            }
        });
    }

    ngAfterViewInit(): void {
    }

    onClick(event: MouseEvent) {
        this.cardClick.emit({ event: event, data: this.content });
    }
    onEnterKeyPress(event: KeyboardEvent) {
        this.enterKeyPress.emit({ event: event, data: this.content });
    }

    // arrangeFrameworkDetails() {
    //     this.se_boards = this.getFormatedData(this.content.se_boards);
    //     this.se_mediums = this.getFormatedData(this.content.se_mediums);
    //     this.se_gradeLevels = this.getFormatedData(this.content.se_gradeLevels);
    //     this.displaySubject = this.getFormatedData(this.content.se_subjects);
    // }

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
