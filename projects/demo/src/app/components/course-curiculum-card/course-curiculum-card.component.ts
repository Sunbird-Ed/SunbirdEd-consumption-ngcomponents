import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-curiculum-card',
  templateUrl: './course-curiculum-card.component.html',
  styleUrls: ['./course-curiculum-card.component.scss']
})
export class CourseCuriculumCardComponent implements OnInit {

  courseCurCard = {
    title:"title",
    subTitle:"subTitle",
    cardImg:"https://material.angular.io/assets/img/examples/shiba2.jpg",
    isActivityTypeCard:false
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
