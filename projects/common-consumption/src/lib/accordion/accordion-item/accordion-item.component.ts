import { Component, OnInit, Input, HostBinding, Host, Output, EventEmitter } from '@angular/core';
import { AccordionComponent } from '../accordion.component';
@Component({
  selector: 'sb-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss']
})
export class AccordionItemComponent implements OnInit {
  private collapsedValue = true;
  /**
   * Item is collapse (`true` by default)
   * type {boolean}
   */
  @Input('collapsed')
  @HostBinding('class.collapsed')
  get collapsed(): boolean {
    return this.collapsedValue;
  }
  set collapsed(val: boolean) {
    this.collapsedValue = convertToBoolProperty(val);
    this.collapsedChange.emit(this.collapsedValue);
  }

  /**
   * Item is expanded (`false` by default)
   * type {boolean}
   */
  @Input('expanded')
  @HostBinding('class.expanded')
  get expanded(): boolean {
    return !this.collapsed;
  }
  set expanded(val: boolean) {
    this.collapsedValue = !convertToBoolProperty(val);
  }

  @Output() collapsedChange = new EventEmitter<boolean>();

  constructor(@Host() private accordion: AccordionComponent) {
  }

  ngOnInit() {
    this.accordion.openCloseItems
    .subscribe(collapsed => {
      this.collapsed = collapsed;
  });
  }


  /**
   * Open/close the item
   */
  toggle() {
    // we need this temporary variable as `openCloseItems.next` will change current value we need to save
    const willSet = !this.collapsed;

    if (!this.accordion.multi) {
      this.accordion.openCloseItems.next(true);
    }
    this.collapsed = willSet;
  }
  open() {
    this.collapsed = false;
  }

  close() {
    this.collapsed = true;
  }

}

export function convertToBoolProperty(val: any): boolean {
  if (typeof val === 'string') {
    val = val.toLowerCase().trim();
    return (val === 'true' || val === '');
  }

  return !!val;
}
