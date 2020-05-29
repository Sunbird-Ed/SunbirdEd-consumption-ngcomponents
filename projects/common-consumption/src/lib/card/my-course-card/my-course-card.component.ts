import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { myCourse } from './course-card-data';
import { ICardClick, CourseCardTypes } from '../models';


@Component({
  selector: 'sb-my-course-card',
  templateUrl: './my-course-card.component.html',
  styleUrls: ['./my-course-card.component.scss','../course-card/course-card.component.scss','../library-card/library-card.component.scss']
})
export class MyCourseCardComponent implements OnInit {

  @Input() course: any = myCourse;
  @Input() isMobile = false;
  @Input() isOffline = false;
  @Input() cardImg = myCourse.courseLogoUrl;
  @Input() section = '';
  @Input() isLoading:boolean;
  @Input() type:CourseCardTypes;
  @Input() hideProgress: boolean = false;

  @Output() cardClick: EventEmitter<ICardClick> = new EventEmitter();

  get CourseCardTypes() { return CourseCardTypes; }


  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

  onClick(event: MouseEvent) {
      this.cardClick.emit({ event: event, data: this.course });
  }
  fetchProgress() {
    var bgColor = "#024f9d";
    var endDate = (this.course.batch!=null && this.course.batch.endDate!=null)?new Date(this.course.batch.endDate):null;
    if(this.course.completionPercentage == "100") {
      bgColor = "#07bc81"; // green
    } else if (endDate!=null && endDate < new Date()) {
      bgColor = "#ff4558"; // red
    }
    let widthStyle = this.course.completionPercentage+"%";
    return {
      width: widthStyle,
      'background-color':bgColor
    };
  }

}
