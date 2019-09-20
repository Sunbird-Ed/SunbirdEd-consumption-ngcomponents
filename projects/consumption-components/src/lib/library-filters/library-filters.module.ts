import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryFiltersComponent } from './library-filters/library-filters.component';

@NgModule({
  declarations: [LibraryFiltersComponent],
  imports: [
    CommonModule
  ],
  exports: [LibraryFiltersComponent]
})
export class LibraryFiltersModule { }
