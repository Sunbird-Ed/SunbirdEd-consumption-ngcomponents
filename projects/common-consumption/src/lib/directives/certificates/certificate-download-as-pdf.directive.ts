import {Directive, HostListener, Inject, Input} from '@angular/core';
import {CertificateDirectivesUtility} from './certificate-directives-utility';
import {CertificateTemplateMetadata} from './certificate-template-metadata';

@Directive({
  selector: '[sbCertificateDownloadAsPdf]'
})
export class CertificateDownloadAsPdfDirective {
  @Input() template: string;
  @Input() metadata: CertificateTemplateMetadata = {};
  @Input() baseUrl?: string;

  constructor(
    @Inject('CANVG') private canvg,
    @Inject('JSPDF') private jsPDF,
  ) {
  }

  @HostListener('click', ['$event']) onClick($event: MouseEvent) {
    const canvasElement = CertificateDirectivesUtility.appendGhostCanvas(
      'sbCertificateDownloadAsPdfCanvas' + Date.now(),
      {
        width: 1060,
        height: 750
      }
    );
    const context: CanvasRenderingContext2D = canvasElement.getContext('2d');

    let svgData = CertificateDirectivesUtility.transposeTemplate(this.template, this.metadata);

    if (this.baseUrl) {
      svgData = svgData.replace(/(<image.*?href\s*=\s*[\"'])\s*/ig, `$1${this.baseUrl}/`);
    }

    const canvg = this.canvg.fromString(context, svgData);

    canvg.start();
    canvg.ready().then(() => {
      const imgData = canvasElement.toDataURL('image/png');
      const pdf = new this.jsPDF({orientation: 'landscape'});
      pdf.addImage(imgData, 'PNG', 10, 10);
      pdf.save(this.metadata.certificateName + '.pdf');

      canvasElement.remove();
    });
  }
}
