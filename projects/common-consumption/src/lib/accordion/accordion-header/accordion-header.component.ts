import { Component, OnInit, ChangeDetectorRef, Host, HostListener, HostBinding, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AccordionItemComponent } from '../accordion-item/accordion-item.component';

@Component({
  selector: 'sb-accordion-header',
  templateUrl: './accordion-header.component.html',
  styleUrls: ['./accordion-header.component.scss'],
  animations: [
    trigger('expansionIndicator', [
      state(
        'expanded',
        style({
          transform: 'rotate(180deg)',
        }),
      ),
      transition('collapsed => expanded', animate('100ms ease-in')),
      transition('expanded => collapsed', animate('100ms ease-out')),
    ]),
  ],
})
export class AccordionHeaderComponent implements OnInit {
  @Input() title = '';

  @HostBinding('class.accordion-item-header-collapsed')
  get isCollapsed(): boolean {
    return this.accordionItem.collapsed;
  }

  @HostBinding('class.accordion-item-header-expanded')
  @HostBinding('attr.aria-expanded')
  get expanded(): boolean {
    return !this.accordionItem.collapsed;
  }

  @HostListener('click')
  @HostListener('keydown.space')
  @HostListener('keydown.enter')
  toggle() {
    this.accordionItem.toggle();
  }

  get state(): string {
    if (this.isCollapsed) {
      return 'collapsed';
    }
    if (this.expanded) {
      return 'expanded';
    }
  }

  constructor(@Host() private accordionItem: AccordionItemComponent, private cd: ChangeDetectorRef) {

  }

  ngOnInit() {
  }


}
