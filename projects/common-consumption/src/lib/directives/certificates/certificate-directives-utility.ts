import {CertificateTemplateMetadata} from './certificate-template-metadata';

export class CertificateDirectivesUtility {
  static appendGhostCanvas(
    id: string,
    dimensions: {
      width: number,
      height: number
    }
  ): HTMLCanvasElement {
    const canvasElement = document.createElement('canvas');
    canvasElement.id = id;
    canvasElement.height = dimensions.height;
    canvasElement.width = dimensions.width;
    canvasElement.style.display = 'none';
    document.body.appendChild(canvasElement);
    return canvasElement;
  }

  static transposeTemplate(template: string, metadata: CertificateTemplateMetadata): string {
    for (const key in metadata) {
      if (key in metadata) {
        template = template.replace('$' + key, metadata[key]);
      }
    }
    return template;
  }
}
