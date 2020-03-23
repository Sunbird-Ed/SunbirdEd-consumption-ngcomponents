import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { courseSection } from './course-section-data';
import { myCourses } from './my-courses-data';
import { ICourse, CourseCardGridTypes } from '../../card/models';
import { IViewMoreClick, ICardClick } from '../models';

@Component({
  selector: 'sb-course-cards-hlist',
  templateUrl: './course-cards-hlist.component.html',
  styleUrls: ['./course-cards-hlist.component.scss']
})
export class CourseCardsHlistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   /* Title for the grid */
   @Input() title: string = courseSection.name;
   @Input() contentList: any = courseSection.contents;
   /* Max card count to be shown */
   @Input() maxCardCount = 10;
   @Input() viewMoreButtonText = 'View More';
   @Input() isLoading:boolean;
   @Input() type:any = CourseCardGridTypes.COURSE_CARD_GRID;


   @Output() viewMoreClick: EventEmitter<IViewMoreClick> = new EventEmitter<IViewMoreClick>();
   @Output() cardClick: EventEmitter<ICardClick> = new EventEmitter<ICardClick>();
   @Output() hoverActionClick: EventEmitter<any> = new EventEmitter<any>();

   get CourseCardGridTypes() { return CourseCardGridTypes; }

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

   hoverActionClicked(event) {
       this.hoverActionClick.emit(event);
   }
   range(maxCardCounter) {
       return  new Array(maxCardCounter);
   }

}
