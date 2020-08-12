import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {Component, DebugElement} from '@angular/core';
import {CertificateDownloadAsPdfDirective} from './certificate-download-as-pdf.directive';

@Component({
  template: `<button sbCertificateDownloadAsPdf [template]="'<svg></svg>'" [metadata]="{}" [baseUrl]="'SAMPLE_BASE_URL'"></button>`
})
class TestCertificateDownloadAsPdfComponent {
}

class MockCanvg {
  static fromString() {
  }
}

class MockJsPDF {
  addImage() {
  }

  save() {
  }
}

describe('CertificateDownloadAsPdfDirective', () => {
  let component: TestCertificateDownloadAsPdfComponent;
  let fixture: ComponentFixture<TestCertificateDownloadAsPdfComponent>;
  let buttonEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestCertificateDownloadAsPdfComponent, CertificateDownloadAsPdfDirective],
      providers: [
        {provide: 'CANVG', useValue: MockCanvg},
        {provide: 'JSPDF', useValue: MockJsPDF},
      ]
    });
    fixture = TestBed.createComponent(TestCertificateDownloadAsPdfComponent);
    component = fixture.componentInstance;
    buttonEl = fixture.debugElement.query(By.css('button'));
  });

  it('should download svg as pdf on click', (done) => {
    // arrange
    const mockCanvgInstance = {
      start: () => {
      },
      ready: () => Promise.resolve()
    };
    spyOn(MockCanvg, 'fromString').and.returnValue(mockCanvgInstance);
    spyOn(mockCanvgInstance, 'start').and.callThrough();
    spyOn(mockCanvgInstance, 'ready').and.callThrough();

    // act
    buttonEl.triggerEventHandler('click', null);
    fixture.detectChanges();

    setTimeout(() => {
      expect(mockCanvgInstance.start).toHaveBeenCalledWith();
      expect(mockCanvgInstance.ready).toHaveBeenCalledWith();
      done();
    }, 4000);
  });
});
