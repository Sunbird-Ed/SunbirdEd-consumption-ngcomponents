import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [FaqComponent],
  imports: [
    CommonModule
  ],
  exports: [FaqComponent]
})
export class FaqModule { }
