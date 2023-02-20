import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';

@NgModule({
  declarations: [AvatarComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [AvatarComponent]
})
export class AvatarModule { }
