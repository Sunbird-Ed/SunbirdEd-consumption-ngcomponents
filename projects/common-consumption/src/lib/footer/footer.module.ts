import { NgModule } from '@angular/core';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    MainFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainFooterComponent
  ]
})
export class FooterModule { }
