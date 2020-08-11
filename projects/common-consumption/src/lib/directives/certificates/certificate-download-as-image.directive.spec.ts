import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CertificateDownloadAsImageDirective} from './certificate-download-as-image.directive';
import {By} from '@angular/platform-browser';
import {Component, DebugElement} from '@angular/core';

@Component({
  template: `
    <button sbCertificateDownloadAsImage [template]="'<svg></svg>'" [metadata]="{}" [baseUrl]="'SAMPLE_BASE_URL'"></button>`
})
class TestCertificateDownloadAsImageComponent {
}

class MockCanvg {
  static fromString() {
  }
}

describe('CertificateDownloadAsImageDirective', () => {
  let component: TestCertificateDownloadAsImageComponent;
  let fixture: ComponentFixture<TestCertificateDownloadAsImageComponent>;
  let buttonEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestCertificateDownloadAsImageComponent, CertificateDownloadAsImageDirective],
      providers: [
        {provide: 'CANVG', useValue: MockCanvg}
      ]
    });
    fixture = TestBed.createComponent(TestCertificateDownloadAsImageComponent);
    component = fixture.componentInstance;
    buttonEl = fixture.debugElement.query(By.css('button'));
  });

  it('should download svg as image on click', (done) => {
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
