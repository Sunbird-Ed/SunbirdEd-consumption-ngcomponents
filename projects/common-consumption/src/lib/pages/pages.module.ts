import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { CertificatePreviewComponent } from './certificate-preview/certificate-preview.component';

@NgModule({
  declarations: [
    InfoComponent,
    CertificatePreviewComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CertificatePreviewComponent
  ]
})
export class PagesModule { }
