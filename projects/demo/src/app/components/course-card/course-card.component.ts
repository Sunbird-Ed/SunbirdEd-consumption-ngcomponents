import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {

  courseCard = {
    course: {
      mimeType: "application/vnd.ekstep.content-collection",
      objectType: "Content",
      contentType: "Course",
      identifier: "do_31297042406633472017",
      name: "Dashboard Loadtest",
      topic: [
        "Social Science"
      ],
      resourceType: "Course",
      orgDetails: {
        orgName: "Pre-prod Custodian Organization"
      }
    },
    isMobile: false,
    isOffline: false,
    isMenu:false,
    section: "section",
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
