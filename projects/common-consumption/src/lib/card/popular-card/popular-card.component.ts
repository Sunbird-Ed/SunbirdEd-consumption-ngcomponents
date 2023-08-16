import { Component, OnInit, Input } from '@angular/core';
interface cardInfo {
  title?: string,
  type?: string,
  icon?: any,
  noOfCourses?: number,
  name?: string
}
@Component({
  selector: 'sb-popular-card',
  templateUrl: './popular-card.component.html',
  styleUrls: ['./popular-card.component.scss']
})
export class PopularCardComponent implements OnInit {
  @Input() data: cardInfo;
  @Input() pillName: string;
  constructor() { }

  ngOnInit(): void {
  }

}
