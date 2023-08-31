import { Component, OnInit, Input } from '@angular/core';
interface cardInfo {
  title?: string,
  type?: string,
  icon?: any,
  description?: string,
  noOfCourses?: number,
  name?: string,
  btnText? : string,
  expand? : boolean,
  expandData? : any
}
@Component({
  selector: 'sb-popular-card',
  templateUrl: './popular-card.component.html',
  styleUrls: ['./popular-card.component.scss']
})
export class PopularCardComponent implements OnInit {
  @Input() data: cardInfo;
  @Input() pillName: string;
  display: boolean = false;
  constructor() { }

  public setDisplay(){
    this.display = !this.display;
  }

  ngOnInit(): void {
  }

}
