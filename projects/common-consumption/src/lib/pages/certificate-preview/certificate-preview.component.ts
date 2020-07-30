import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sb-certificate-preview',
  templateUrl: './certificate-preview.component.html',
  styleUrls: ['./certificate-preview.component.scss']
})
export class CertificatePreviewComponent implements OnInit {

  /** It contains the certificate id passed from the calling component */
  @Input() certificateId: string;

  /** It contains the template id passed from the calling component */
  @Input() templateId: string;

  constructor() { }

  ngOnInit() {
  }

}
