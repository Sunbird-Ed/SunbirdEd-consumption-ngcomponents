import {Directive, HostListener, Inject, Input} from '@angular/core';
import {CertificateDirectivesUtility} from './certificate-directives-utility';
import {CertificateTemplateMetadata} from './certificate-template-metadata';

@Directive({
  selector: '[sbCertificateDownloadAsImage]'
})
export class CertificateDownloadAsImageDirective {
  @Input() template: string;
  @Input() metadata: CertificateTemplateMetadata = {};
  @Input() baseUrl?: string;

  constructor(
    @Inject('CANVG') private canvg
  ) {
  }

  @HostListener('click', ['$event']) onClick($event: MouseEvent) {
    const canvasElement = CertificateDirectivesUtility.appendGhostCanvas(
      'sbCertificateDownloadAsImageCanvas' + Date.now(),
      {
        width: 1754,
        height: 1240
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
      const ghostLink = document.createElement('a');
      ghostLink.download = this.metadata.certificateName + '.png';
      ghostLink.href = canvasElement.toDataURL('image/png');
      ghostLink.click();

      canvasElement.remove();
    });
  }
}
