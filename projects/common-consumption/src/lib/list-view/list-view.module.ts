import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    ListComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent,
    CarouselComponent
  ]
})
export class ListViewModule {}
