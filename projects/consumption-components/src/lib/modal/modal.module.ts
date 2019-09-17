import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';

@NgModule({
  declarations: [ConfirmationModalComponent],
  imports: [
    CommonModule
  ],
  exports: [ConfirmationModalComponent]
})
export class ModalModule { }
