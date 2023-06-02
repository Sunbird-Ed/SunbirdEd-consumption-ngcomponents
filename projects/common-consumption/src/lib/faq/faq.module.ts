import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq/faq.component';
import { MaterialExampleModule } from './../material.module';
@NgModule({
  declarations: [FaqComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialExampleModule
  ],
  exports: [FaqComponent]
})
export class FaqModule { }
