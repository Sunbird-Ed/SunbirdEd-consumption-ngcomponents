import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ICardClick } from '../../layout/models';


@Component({
  selector: 'sb-course-curiculum-card',
  templateUrl: './course-curiculum-card.component.html',
  styleUrls: ['./course-curiculum-card.component.scss','../library-card/library-card.component.scss']
})
export class CourseCuriculumCardComponent implements OnInit {

  @Input() cardData: any;
  @Input() cardImg;
  @Input() title;
  @Input() subTitle;
  @Input() isLoading:boolean;
  @Input() theme: string;
  @Input() titleColor: string;


  @Output() cardClick: EventEmitter<ICardClick> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.title = this.cardData!=null && this.cardData.title!=null?this.cardData.title:"Mathematics";
    this.subTitle = this.cardData!=null && this.cardData.count!=null?this.cardData.count:"0 Courses";
    this.theme = this.cardData!=null && this.cardData.theme!=null?this.cardData.theme:"#EA5B5D";
    this.cardImg = this.cardData!=null && this.cardData.cardImg!=null?this.cardData.cardImg:"https://www.valimenta.com/wp-content/uploads/icon-microscope.png";
  }
  onClick(event: MouseEvent) {
    this.cardClick.emit({ event: event, data: this.cardData });
  }
  fetchStyles() {
    return {
      background: this.theme!=null?this.theme:"#EA5B5D"
    };
  }
  fetchTextStyles() {
    return {
      color: this.titleColor!=null?this.titleColor:"#000"
    };
  }

}
