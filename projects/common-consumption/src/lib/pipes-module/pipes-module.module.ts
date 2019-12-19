import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MimeTypePipe } from './mime-type';

@NgModule({
  declarations: [MimeTypePipe],
  imports: [
    CommonModule
  ],
  exports: [MimeTypePipe]
})
export class PipesModule { }
