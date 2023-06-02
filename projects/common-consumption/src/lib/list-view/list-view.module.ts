import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MaterialExampleModule } from './../material.module';
@NgModule({
  declarations: [
    ListComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    MaterialExampleModule
  ],
  exports: [
    ListComponent,
    CarouselComponent
  ]
})
export class ListViewModule {}
