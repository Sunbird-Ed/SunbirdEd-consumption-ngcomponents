import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CertificateActionsComponent } from './certificate-actions.component';
import { By } from '@angular/platform-browser';

describe('CertificateActionsComponent', () => {
  let component: CertificateActionsComponent;
  let fixture: ComponentFixture<CertificateActionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateActionsComponent);
    component = fixture.componentInstance;
    component.showOverlay = true;
    component.select = { show: true, label: 'Select', name: 'select' };
    fixture.detectChanges();
  });

  it('should create', () => {
    const selectButton = fixture.debugElement.query(By.css('.sb-btn'));
    selectButton.nativeElement.click();
    expect(component).toBeTruthy();
  });
});
