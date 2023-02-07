import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.scss']
})
export class GroupCardComponent implements OnInit {

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
  

  constructor() { }

  ngOnInit(): void {
  }

}
