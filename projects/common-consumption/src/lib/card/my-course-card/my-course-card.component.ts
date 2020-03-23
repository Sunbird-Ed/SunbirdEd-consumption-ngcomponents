import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { myCourse } from './course-card-data';
import { ICardClick } from '../models';


@Component({
  selector: 'sb-my-course-card',
  templateUrl: './my-course-card.component.html',
  styleUrls: ['./my-course-card.component.scss','../course-card/course-card.component.scss']
})
export class MyCourseCardComponent implements OnInit {

  @Input() course: any = myCourse;
  @Input() isMobile = false;
  @Input() isOffline = false;
  @Input() cardImg = myCourse.courseLogoUrl;
  @Input() section = '';
  @Input() isLoading:boolean;

  @Output() cardClick: EventEmitter<ICardClick> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

  onClick(event: MouseEvent) {
      this.cardClick.emit({ event: event, data: this.course });
  }
  fetchProgress() {
    return {width: this.course.completionPercentage+"%"};
  }

}
