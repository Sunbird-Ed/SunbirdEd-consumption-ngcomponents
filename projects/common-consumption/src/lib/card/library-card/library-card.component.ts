import { Component, Input, OnInit } from '@angular/core';
import { staticContent } from './library-card.data';

@Component({
  selector: 'sb-library-card',
  templateUrl: './library-card.component.html',
  styleUrls: ['./library-card.component.scss']
})
export class LibraryCardComponent implements OnInit {

  @Input() content = staticContent;
  @Input() isMobile = false;
  @Input() isOffline = false;
  @Input() defaultImg = '';
  @Input() offlineImg = 'assets/images/offline.svg';

  ngOnInit() {
    console.log('content', this.content);
  }
}
