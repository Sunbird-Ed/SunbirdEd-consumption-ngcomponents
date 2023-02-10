import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library-card-v3',
  templateUrl: './library-card-v3.component.html',
  styleUrls: ['./library-card-v3.component.scss']
})
export class LibraryCardV3Component implements OnInit {

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
