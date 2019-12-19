import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';
import { AccordionHeaderComponent } from './accordion-header/accordion-header.component';
import { AccordionBodyComponent } from './accordion-body/accordion-body.component';

@NgModule({
  declarations: [
    AccordionComponent,
    AccordionItemComponent,
    AccordionHeaderComponent,
    AccordionBodyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AccordionComponent,
    AccordionItemComponent,
    AccordionHeaderComponent,
    AccordionBodyComponent
  ]
})
export class AccordionModule { }
