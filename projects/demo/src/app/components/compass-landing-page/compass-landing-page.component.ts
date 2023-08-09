import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compass-landing-page',
  templateUrl: './compass-landing-page.component.html',
  styleUrls: ['./compass-landing-page.component.scss']
})
export class CompassLandingPageComponent implements OnInit {

  landingPageData = {
    summaryCardData: {
      iconUrl: "assets/common-consumption/images/courses.svg",
      title: "Courses",
      count: "1000+",
      commonIconUrl: "assets/common-consumption/images/arrow.svg"
    },
    exploreData: {
      iconUrl: "assets/common-consumption/images/group24.png",
      title: "Learn",
      content: "Sharpen your skills with hundreds-of online courses",
    },
    footerData: {
      links: ["Learn", "Connections", "Discussion", "Jobs", "Competencies", "Events"],
      logoLink: "assets/common-consumption/images/Logo-ss-white.png",
      footerText: "2022 Copyright [Company Name]"
    }
  };

  // popularData = {
  //   competencyData: {
  //     data: [
  //       {
  //         title: "Communication",
  //         type: "Behavioural",
  //         icon: "assets/common-consumption/images/course.svg",
  //         noOfCourse: 4
  //       },
  //       {
  //         title: "Palnning",
  //         type: "Domain",
  //         icon: "assets/common-consumption/images/course.svg",
  //         noOfCourse: 4 
  //       },
  //       {
  //         title: "Design thinking",
  //         type: "Behavioural",
  //         icon: "assets/common-consumption/images/course.svg",
  //         noOfCourse: 4 
  //       }
  //     ]
  //   },
  //   topicsData: {
  //     data: [
  //       {
  //         name: "COVID 19"
  //       },
  //       {
  //         name: "Social Science"
  //       }
  //     ]
  //   }
  // }

  competencyData = {
    title: "Communication",
    type: "Behavioural",
    icon: "assets/common-consumption/images/course.svg",
    noOfCourse: 4
  }

  topicsData = {
    name: "COVID 19"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
