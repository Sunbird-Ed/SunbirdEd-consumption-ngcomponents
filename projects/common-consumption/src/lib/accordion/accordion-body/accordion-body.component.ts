import { Component, Host } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AccordionItemComponent } from '../accordion-item/accordion-item.component';

const accordionItemBodyTrigger = trigger('accordionItemBody', [
  state(
    'collapsed',
    style({
      overflow: 'hidden',
      visibility: 'hidden',
      height: 0,
    }),
  ),
  state(
    'expanded',
    style({
      overflow: 'hidden',
      visibility: 'visible',
    }),
  ),
  transition('collapsed => expanded', animate('100ms ease-in')),
  transition('expanded => collapsed', animate('100ms ease-out')),
]);

@Component({
  selector: 'sb-accordion-body',
  templateUrl: './accordion-body.component.html',
  styleUrls: ['./accordion-body.component.scss'],
  animations: [accordionItemBodyTrigger],
})
export class AccordionBodyComponent {

  constructor(@Host() private accordionItem: AccordionItemComponent) { }

  get state(): string {
    return this.accordionItem.collapsed ? 'collapsed' : 'expanded';
  }

}
