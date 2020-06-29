import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryCardsStackComponent } from './library-cards-stack/library-cards-stack.component';
import { CardModule } from '../card/card.module';
import { LibraryCardsGridComponent } from './library-cards-grid/library-cards-grid.component';
import { CourseCardsHlistComponent } from './course-cards-hlist/course-cards-hlist.component';
import { MemberListComponent } from './member-list/member-list.component';
import { CardsGridComponent } from './cards-grid/cards-grid.component';

@NgModule({
  declarations: [LibraryCardsStackComponent, LibraryCardsGridComponent, CourseCardsHlistComponent, MemberListComponent, CardsGridComponent],
  imports: [
    CommonModule,
    CardModule
  ],
  exports: [LibraryCardsStackComponent, LibraryCardsGridComponent,CourseCardsHlistComponent,MemberListComponent,CardsGridComponent]
})
export class LayoutModule { }
