import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

export interface IPreviewActionButton {
  label: string;
  name: string;
  show: boolean;
}

export interface IPreviewActionButtonClick {
  event: MouseEvent;
  name: string;
}

@Component({
  selector: 'sb-certificate-actions',
  templateUrl: './certificate-actions.component.html',
  styleUrls: ['./certificate-actions.component.scss']
})

export class CertificateActionsComponent {
  @Input() select: IPreviewActionButton = { show: false, label: 'Select', name: 'select' };
  @Input() preview: IPreviewActionButton = { show: false, label: 'Preview', name: 'preview' };
  @Input() remove: IPreviewActionButton = { show: false, label: 'Remove', name: 'remove' };
  @Input() template: string;
  @Input() isSelectedTemplate = false;

  @Input() actionButtons: IPreviewActionButton[] = [];
  @Output() buttonClick = new EventEmitter<IPreviewActionButtonClick>();

  showOverlay = true;
  constructor(public domSanitizer: DomSanitizer) { }

  onButtonClick(event: MouseEvent, name: string) {

    if (name === 'select') {
      this.isSelectedTemplate = true;
      this.showOverlay = false;
    }
    this.buttonClick.emit({ event, name });
  }

  getSafeUrl(url) {
    if (url) {
      return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    }
    return '';
  }
}
