import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sb-library-cards-stack',
  templateUrl: './library-cards-stack.component.html',
  styleUrls: ['./library-cards-stack.component.scss']
})
export class LibraryCardsStackComponent implements OnInit {

  @Input() contentList;
  @Input() title: string;
  @Input() isOffline = false;
  @Input() viewMoreButtonText = 'View All';
  @Input() cardDisplayCount: number;


  @Output() buttonClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  showAllList(event) {
    this.buttonClick.emit(event);
  }

}
