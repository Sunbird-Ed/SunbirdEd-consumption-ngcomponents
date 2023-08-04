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

  constructor() { }

  ngOnInit(): void {
  }

}
