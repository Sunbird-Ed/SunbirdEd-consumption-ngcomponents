import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [FaqComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [FaqComponent]
})
export class FaqModule { }
