import { Component, OnInit } from '@angular/core';
const COMPETENCY_DATA = [
  { selector: '<sb-popular-card> </sb-popular-card>', input:"{ title:string, type: string, icon: string, noOfCources: number}" }
];

const TOPICS_DATA = [
  { selector: '<sb-popular-card> </sb-popular-card>', input:"{ name: string}" }
];

@Component({
  selector: 'app-lern-landing-page',
  templateUrl: './lern-landing-page.component.html',
  styleUrls: ['./lern-landing-page.component.scss']
})
export class LernLandingPageComponent implements OnInit {
  displayedColumns: string[] = ['selector', 'input'];
  competencyDataSource = COMPETENCY_DATA;
  topicsDataSource = TOPICS_DATA;

  competencyData = {
    title: "Communication",
    type: "Behavioural",
    icon: "assets/common-consumption/images/course.svg",
    description: "Planning vigilance activities in accordance with procedures that balance the needs of maintaining a fraud free environment and business objectives",
    noOfCourses: 4,
    btnText : "View courses"
  }

  topicsData = {
    name: "COVID 19"
  }

    
  constructor() { }

  ngOnInit(): void {
  }

}
