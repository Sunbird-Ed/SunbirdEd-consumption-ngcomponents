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
    btnText : "View courses",
    expand : true,
    expandData: [{"trackable":{"enabled":"No","autoBatch":"No"},"identifier":"do_113862347491254272135","primaryCategory":"Course Unit","channel":"0138325860604395527","name":"social science","mimeType":"application/vnd.ekstep.content-collection","contentType":"CourseUnit","pkgVersion":1,"objectType":"Content","orgDetails":{"orgName":"compass"}},
    {"trackable":{"enabled":"No","autoBatch":"No"},"identifier":"do_113855796417691648150","primaryCategory":"Course Unit","channel":"0138325860604395527","name":"Math Unit","mimeType":"application/vnd.ekstep.content-collection","contentType":"CourseUnit","pkgVersion":1,"objectType":"Content","orgDetails":{"orgName":"compass"}}]
  }

  topicsData = {
    name: "COVID 19"
  }

    
  constructor() { }

  ngOnInit(): void {
  }

}
