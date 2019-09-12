import { Component, OnInit, Input } from '@angular/core';
import { staticContent } from './library-card.data';

@Component({
  selector: 'sb-library-card',
  templateUrl: './library-card.component.html',
  styleUrls: ['./library-card.component.scss']
})
export class LibraryCardComponent implements OnInit {

  @Input() content = staticContent;

  constructor() {

  }

  ngOnInit() {
  }

}
