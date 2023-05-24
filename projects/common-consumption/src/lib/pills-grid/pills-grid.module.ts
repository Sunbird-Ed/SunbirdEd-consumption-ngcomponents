import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PillsGridComponent } from './pills-grid/pills-grid.component';
import { PillItemComponent } from './pill-item/pill-item.component';
import { MatChipsModule } from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    PillsGridComponent,
    PillItemComponent
  ],
  imports: [
    CommonModule,
    MatChipsModule,
    MatButtonModule
  ],
  exports: [
    PillsGridComponent,
    PillItemComponent
  ]
})
export class PillsGridModule {}
