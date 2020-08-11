import {NgModule} from '@angular/core';
import {CertificateDownloadAsImageDirective} from './certificate-download-as-image.directive';
import {CertificateDownloadAsPdfDirective} from './certificate-download-as-pdf.directive';
import Canvg from 'canvg';
import * as JsPDF from 'jspdf';

@NgModule({
  declarations: [
    CertificateDownloadAsImageDirective,
    CertificateDownloadAsPdfDirective
  ],
  exports: [
    CertificateDownloadAsImageDirective,
    CertificateDownloadAsPdfDirective
  ],
  providers: [
    {provide: 'CANVG', useValue: Canvg},
    {provide: 'JSPDF', useValue: JsPDF},
  ]
})
export class CertificateDirectivesModule {

}
