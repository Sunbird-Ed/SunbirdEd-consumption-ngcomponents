import { Component, Input, Output, EventEmitter } from '@angular/core';

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
  constructor() { }

  onButtonClick(event: MouseEvent, name: string) {
    this.buttonClick.emit({ event, name });
  }

}
