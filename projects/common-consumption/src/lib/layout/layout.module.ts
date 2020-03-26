import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryCardsStackComponent } from './library-cards-stack/library-cards-stack.component';
import { CardModule } from '../card/card.module';
import { LibraryCardsGridComponent } from './library-cards-grid/library-cards-grid.component';
import { CourseCardsHlistComponent } from './course-cards-hlist/course-cards-hlist.component';

@NgModule({
  declarations: [LibraryCardsStackComponent, LibraryCardsGridComponent, CourseCardsHlistComponent],
  imports: [
    CommonModule,
    CardModule
  ],
  exports: [LibraryCardsStackComponent, LibraryCardsGridComponent,CourseCardsHlistComponent]
})
export class LayoutModule { }
