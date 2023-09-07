import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sb-cqube-card',
  templateUrl: './cqube-card.component.html',
  styleUrls: ['./cqube-card.component.scss']
})
export class CqubeCardComponent implements OnInit {

  @Input() cardImg:string;

  constructor() { }

  ngOnInit(): void {

  }

  onClick(event:any) {

  }

}
