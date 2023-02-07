import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() section = '';
layoutConfig:any;
  bCardData = {
    bannerList: {
      banner: {
        ui: {
          text:"text",
          cardImg:"https://material.angular.io/assets/img/examples/shiba2.jpg",
        }
      }
    }
  }
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
  courseCurCard = {
    title:"title",
    subTitle:"subTitle",
    cardImg:"https://material.angular.io/assets/img/examples/shiba2.jpg",
    isActivityTypeCard:false
  }
  
  memberCardConfig = { size: 'large', isBold: true, isSelectable: true, view: 'vertical' };
  
  member = {
    title:"sample",
    initial:"V",
  }

  gCardData = {
    group: {
      initial:"AB",
      name:"name",
      isSuspended:false,
      isAdmin:false,
      description:"description",
      isMobile:false,
      cardBgColor:"#b3ebd7"
    }
  }
  
  VCardData = {
    content: {
      tagName:"tagname",
      primaryCategory:"primaryCategory",
      contentType:"contentType",
      name:"Title",
      subject:["telugu","hindi","tamil"],
      organisation:"organisation",
      medium:"medium",
      gradeLevel:"gradeLevel",
      badgeAssertions: [{badgeClassImage:"https://material.angular.io/assets/img/examples/shiba2.jpg"}],
      hoverData:"hoverData",
      resourceType:"resourceType",
      se_boards:"se_boards",
      se_mediums: "se_mediums",
      se_gradeLevels: "se_gradeLevels",
      creator: "creator"
    },
    gridTemplate:true,
    layoutConfig:true,
    isLoading:true,
    isMobile: false,
    isOffline: false,
    cardImg: "https://material.angular.io/assets/img/examples/shiba2.jpg",
    type: ["qrcode_result","portal_qrcode_flatresult","desktop_textbook","mobile_textbook","recently_viewed"], // "QRCODE_RESULT","PORTAL_QRCODE_FLATRESULT","DESKTOP_TEXTBOOK","MOBILE_TEXTBOOK","RECENTLY_VIEWED"
    moreInfoLabel: "Medium",
    section: "section",
    isSelected:false,
    isMenu:false,
    btnlabel:"btnlabel"
}

  constructor() { }
  ngOnInit(): void {
  }
}