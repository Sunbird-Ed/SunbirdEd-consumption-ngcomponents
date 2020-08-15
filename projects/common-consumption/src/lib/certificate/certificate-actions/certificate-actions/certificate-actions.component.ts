import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sb-certificate-actions',
  templateUrl: './certificate-actions.component.html',
  styleUrls: ['./certificate-actions.component.scss']
})
export class CertificateActionsComponent implements OnInit {
  @Input() select = { show: false, label: 'Select' };
  @Input() preview = { show: false, label: 'Preview' };
  @Input() remove = { show: false, label: 'Remove' };
  @Input() template: string;
  @Input() isSelectedTemplate = false;

  @Output() selectClick = new EventEmitter<MouseEvent>();
  @Output() previewClick = new EventEmitter<MouseEvent>();
  @Output() removeClick = new EventEmitter<MouseEvent>();
  constructor() { }

  ngOnInit() {
  }

  onSelectClick(event: MouseEvent) {
    this.selectClick.emit(event);
  }

  onPreviewClick(event: MouseEvent) {
    this.previewClick.emit(event);
  }

  onRemoveClick(event: MouseEvent) {
    this.removeClick.emit(event);
  }

}
