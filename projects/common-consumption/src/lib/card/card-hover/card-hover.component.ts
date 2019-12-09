import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sb-card-hover',
  templateUrl: './card-hover.component.html',
  styleUrls: ['./card-hover.component.scss']
})
export class CardHoverComponent implements OnInit, AfterViewInit {

  @Input() hoverData;
  @Input() content;
  @Output() hoverActionClick: EventEmitter<any> = new EventEmitter();

  public text = 'click';

  constructor() {
    console.log('constructor  ', this.hoverData);
  }

  ngOnInit() {
    console.log('on init  ', this.hoverData);
  }

  ngAfterViewInit(): void {
  }

  actionClick(item, content, event) {
    this.hoverActionClick.emit({ event: event, hover: item, content: content });
    event.stopPropagation();
  }

}
