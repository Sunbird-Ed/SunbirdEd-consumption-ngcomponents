import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sb-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  paletteList: any = ["#B30021", "#7B1FA2", "#00606B", "#7B1FA2", "#8A4500", "#115292", "#50590D", "#B30021", "#8A4500", "#28622B"];

  @Input() title: string = "Dummy";
  @Input() indexOfMember: number = 0;
  @Input() initial: string = "D";
  @Input() cardImg: string = "";
  @Input() selected: boolean = false;
  @Input() progressDisplay: string;
  @Input() progressSize;
  @Input() isLoading: boolean;
  @Input() config = { size: 'medium', view: "vertical", isTitle: true }

  constructor() { }

  ngOnInit() {
    if (this.initial != null) {
    } else {
      this.initial = "J"
    }
    if (this.config.isTitle && this.title == null) {
      this.title = "John Doe";
    }
  }

  fetchStyle() {
    if (this.indexOfMember > 10) {
      this.indexOfMember = this.indexOfMember % 10;
    }
    return {
      'border-color': this.paletteList[this.indexOfMember],
      'color': this.paletteList[this.indexOfMember]
    };
  }

}