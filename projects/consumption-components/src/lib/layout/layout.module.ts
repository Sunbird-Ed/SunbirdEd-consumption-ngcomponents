import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryCardsStackComponent } from './library-cards-stack/library-cards-stack.component';
import { CardModule } from '../card/card.module';
import { LibraryCardsGridComponent } from './library-cards-grid/library-cards-grid.component';

@NgModule({
  declarations: [LibraryCardsStackComponent, LibraryCardsGridComponent],
  imports: [
    CommonModule,
    CardModule
  ],
  exports: [LibraryCardsStackComponent]
})
export class LayoutModule { }
