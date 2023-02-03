import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  v2CardData = {
    content: {
      tagName:"tagname",
      name:"Title",
      subject:["telugu","hindi","tamil"]
    },
    isMobile: false,
    isOffline: false,
    cardImg: "",
    type: "recently_viewed",
    moreInfoLabel: "Medium"
}

  constructor() { }

  ngOnInit(): void {
  }

}
