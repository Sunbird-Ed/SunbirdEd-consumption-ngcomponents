import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateActionsComponent } from './certificate-actions.component';

describe('CertificateActionsComponent', () => {
  let component: CertificateActionsComponent;
  let fixture: ComponentFixture<CertificateActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
