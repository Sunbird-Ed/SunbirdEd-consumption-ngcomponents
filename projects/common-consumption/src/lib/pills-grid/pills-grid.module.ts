import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PillsGridComponent } from './pills-grid/pills-grid.component';
import { PillItemComponent } from './pill-item/pill-item.component';

@NgModule({
  declarations: [
    PillsGridComponent,
    PillItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PillsGridComponent,
    PillItemComponent
  ]
})
export class PillsGridModule {}
