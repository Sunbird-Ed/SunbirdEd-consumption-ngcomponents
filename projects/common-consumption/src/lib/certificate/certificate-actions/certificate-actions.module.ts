import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificateActionsComponent } from './certificate-actions/certificate-actions.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [CertificateActionsComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [CertificateActionsComponent]
})
export class CertificateActionsModule { }
