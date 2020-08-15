import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificateActionsComponent } from './certificate-actions/certificate-actions.component';

@NgModule({
  declarations: [CertificateActionsComponent],
  imports: [
    CommonModule
  ],
  exports: [CertificateActionsComponent]
})
export class CertificateActionsModule { }
