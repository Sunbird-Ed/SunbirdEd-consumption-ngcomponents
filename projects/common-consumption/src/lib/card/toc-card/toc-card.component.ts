import { Component, OnInit, Input, EventEmitter, Output, QueryList, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'sb-toc-card',
  templateUrl: './toc-card.component.html',
  styleUrls: ['./toc-card.component.scss']
})
export class TocCardComponent implements OnInit {
  @ViewChild('card') card: ElementRef;
  @Input() content;
  @Input() activeContent;
  @Output() tocCardClick: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    setTimeout(() => {
      if (this.activeContent && this.activeContent.identifier === this.content.identifier) {
        this.tocCardClick.emit({ event: {}, data: { ...this.content } });
      }
    });
  }

  public async onTocCardClick(event) {
    if (this.activeContent && this.activeContent.identifier !== this.content.identifier) {
      this.tocCardClick.emit({ event: event, data: { ...this.content } });
    }
  }
}
