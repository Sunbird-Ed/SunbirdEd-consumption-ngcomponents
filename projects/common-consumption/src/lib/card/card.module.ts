import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryCardComponent } from './library-card/library-card.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CardHoverComponent } from './card-hover/card-hover.component';

@NgModule({
  declarations: [LibraryCardComponent, CourseCardComponent, CardHoverComponent],
  imports: [
    CommonModule
  ],
  exports: [LibraryCardComponent, CourseCardComponent, CardHoverComponent]
})
export class CardModule { }
