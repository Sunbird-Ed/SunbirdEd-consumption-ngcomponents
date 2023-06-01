import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryFiltersComponent } from './library-filters/library-filters.component';
import { MaterialExampleModule } from './../material.module';

@NgModule({
  declarations: [LibraryFiltersComponent],
  imports: [
    CommonModule,
    MaterialExampleModule
  ],
  exports: [LibraryFiltersComponent]
})
export class LibraryFiltersModule { }
