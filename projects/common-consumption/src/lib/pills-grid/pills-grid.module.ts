import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PillsGridComponent } from './pills-grid/pills-grid.component';

@NgModule({
  declarations: [PillsGridComponent],
  imports: [
    CommonModule
  ],
  exports: [PillsGridComponent]
})
export class PillsGridModule {}
