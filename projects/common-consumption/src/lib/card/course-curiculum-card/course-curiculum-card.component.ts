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
  @Input() index: number;
  @Input() isActivityTypeCard = false;

  @Output() cardClick: EventEmitter<ICardClick> = new EventEmitter();

  palatteList = [
    {bgColor:"#FFDFC7",fontColor:"#6D3E1C"},
    {bgColor:"#C2ECE6",fontColor:"#0B5046"},
    {bgColor:"#FFE59B",fontColor:"#5C4500"},
    {bgColor:"#DAD4FF",fontColor:"#2F27B9"},
    {bgColor:"#80cbc4",fontColor:"#00332E"},
    {bgColor:"#e6ee9c",fontColor:"#4C4C10"},
    {bgColor:"#ffe082",fontColor:"#6B3D00"}]

  constructor() { }

  ngOnInit() {
    this.title = this.cardData!=null && this.cardData.title!=null?this.cardData.title:"Mathematics";
    this.subTitle = this.cardData!=null && this.cardData.count!=null?this.cardData.count:"";
    this.theme = this.cardData!=null && this.cardData.theme!=null?this.cardData.theme:this.fetchBgColor();
    this.titleColor = this.cardData!=null && this.cardData.titleColor!=null?this.cardData.titleColor:this.fetchColor();
    this.cardImg = this.cardData!=null && this.cardData.cardImg!=null?this.cardData.cardImg:"";
    if(this.cardData!=null && typeof(this.cardData) == "object") {
      this.cardData.titleColor = this.titleColor;
      this.cardData.theme = this.theme; 
    }
  
  }

  fetchColor() {
    let palatteIndex = this.index!=null ? this.index % 7 :0;
    return this.palatteList[palatteIndex].fontColor;
  }

  fetchBgColor() {
    let palatteIndex = this.index!=null ? this.index % 7:0;
    return this.palatteList[palatteIndex].bgColor;
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
