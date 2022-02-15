import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LibraryCardV2Component } from './library-card-v2.component';
import { By } from '@angular/platform-browser';

describe('LibraryCardV2Component', () => {
  let component: LibraryCardV2Component;
  let fixture: ComponentFixture<LibraryCardV2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryCardV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryCardV2Component);
    component = fixture.componentInstance;
    component.indexToDisplay = 0;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.content = {};
    component.content.gradeLevel = ["English","Kannada"];
    const libraryCard = fixture.debugElement.query(By.css('.sb--card'));
    libraryCard.nativeElement.click();
    fixture.detectChanges();
    expect(component).toBeTruthy();
    component.layoutConfig = {};
    component.content = {};
    component.content.gradeLevel = "";
    component.layoutConfig.cardImgStyle = "";
    fixture.detectChanges();
    
    expect(component).toBeTruthy();
  });
});
