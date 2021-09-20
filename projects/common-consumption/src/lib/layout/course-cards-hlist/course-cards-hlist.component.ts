import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { courseSection } from './course-section-data';
import { myCourses } from './my-courses-data';
import { ICourse, CourseCardGridTypes, CourseCardTypes, ButtonPosition } from '../../card/models';
import { IViewMoreClick, ICardClick } from '../models';

@Component({
  selector: 'sb-course-cards-hlist',
  templateUrl: './course-cards-hlist.component.html',
  styleUrls: ['./course-cards-hlist.component.scss']
})
export class CourseCardsHlistComponent implements OnInit {

    /* Title for the grid */
   @Input() title: string = courseSection.name;
   @Input() contentList: any;
   /* Max card count to be shown */
   @Input() maxCardCount = 10;
   @Input() viewMoreButtonText = 'View More';
   @Input() isLoading:boolean;
   @Input() type:CourseCardGridTypes;
   @Input() multiRow:boolean;
   @Input() hideProgress:boolean;

   /* Show Menu on each card */
    @Input() isMenu = false;
    @Input() viewMoreButtonPosition: ButtonPosition = ButtonPosition.TOP;
    @Input() publishedByText = '';

   @Output() viewMoreClick: EventEmitter<IViewMoreClick> = new EventEmitter<IViewMoreClick>();
   @Output() cardClick: EventEmitter<ICardClick> = new EventEmitter<ICardClick>();
   @Output() menuClick: EventEmitter<ICardClick> = new EventEmitter();

    get ButtonPosition() { return ButtonPosition; }

  constructor() {
  }

  ngOnInit() {
    if(this.type!=null) {
        if(this.type == CourseCardGridTypes.MY_COURSE_CARD_GRID || 
            this.type == CourseCardGridTypes.MY_COURSE_RECENTLY_VIEWED_CARD_GRID) {
            if(!(this.contentList!=null)) {
                this.contentList = myCourses.courses;
            }
            
        } else {
            if(!(this.contentList!=null)) {
                this.contentList = courseSection.contents;
            }
        }
    } else {
        this.type = CourseCardGridTypes.COURSE_CARD_GRID;
        if(!(this.contentList!=null)) {
            this.contentList = courseSection.contents;
        }
    }
  }
  ngOnChanges(changes) {
 }

   get CourseCardGridTypes() { return CourseCardGridTypes; }
   get CourseCardTypes() { return CourseCardTypes; }

   /**
    * Triggers event on `View More` Click
    * @param event HTML click event
    */
   onViewMoreClick(event: MouseEvent) {
       this.viewMoreClick.emit({ event, data: this.contentList });
   }

   /**
    * Triggers event on card click
    * @param event HTML Click event
    * @param data Content data for selected card
    */
   onCardClick(event: MouseEvent, data: ICourse) {
       this.cardClick.emit({ event, data });
   }

   range(maxCardCounter) {
       return  new Array(maxCardCounter);
   }

   onCardMenuClick(event) {
       this.menuClick.emit(event);
   }

}
