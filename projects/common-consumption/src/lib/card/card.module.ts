import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryCardComponent } from './library-card/library-card.component';
import { CourseCardComponent } from './course-card/course-card.component';

@NgModule({
  declarations: [LibraryCardComponent, CourseCardComponent],
  imports: [
    CommonModule
  ],
  exports: [LibraryCardComponent, CourseCardComponent]
})
export class CardModule { }
