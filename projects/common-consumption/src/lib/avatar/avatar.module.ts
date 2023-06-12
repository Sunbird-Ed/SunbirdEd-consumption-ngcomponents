import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [AvatarComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule
  ],
  exports: [AvatarComponent]
})
export class AvatarModule { }
