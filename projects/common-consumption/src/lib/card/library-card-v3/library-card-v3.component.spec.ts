import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LibraryCardV3Component } from './library-card-v3.component';
import { By } from '@angular/platform-browser';

describe('LibraryCardV3Component', () => {
  let component: LibraryCardV3Component;
  let fixture: ComponentFixture<LibraryCardV3Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryCardV3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryCardV3Component);
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
