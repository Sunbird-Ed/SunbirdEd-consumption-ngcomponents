import { Component, Input } from '@angular/core';
import { staticContent } from './library-card.data';

@Component({
  selector: 'sb-library-card',
  templateUrl: './library-card.component.html',
  styleUrls: ['./library-card.component.scss']
})
export class LibraryCardComponent {

  @Input() content = staticContent;
  @Input() defaultImage;
  @Input() isOnline = false;

}
