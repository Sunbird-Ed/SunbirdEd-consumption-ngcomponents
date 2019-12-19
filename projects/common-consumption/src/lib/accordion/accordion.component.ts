import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'sb-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  openCloseItems = new Subject<boolean>();
  @Input('multi')
  get multi(): boolean {
    return this.multiValue;
  }
  set multi(val: boolean) {
    this.multiValue = convertToBoolProperty(val);
  }

  @Input() isHiidden = true;
  @Output() cardClick: EventEmitter<any> = new EventEmitter();

  private multiValue = false;
  constructor() { }

  ngOnInit() {
  }

  /**
   * Opens all enabled accordion items.
   */
  openAll() {
    if (this.multi) {
      this.openCloseItems.next(false);
    }
  }

  /**
   * Closes all enabled accordion items.
   */
  closeAll() {
    this.openCloseItems.next(true);
  }

  // toggleAccordion() {
  //   this.isHiidden = !this.isHiidden;
  //   this.cardClick.emit({ event: event, data: this.isHiidden });
  // }
}


export function convertToBoolProperty(val: any): boolean {
  if (typeof val === 'string') {
    val = val.toLowerCase().trim();

    return (val === 'true' || val === '');
  }

  return !!val;
}
