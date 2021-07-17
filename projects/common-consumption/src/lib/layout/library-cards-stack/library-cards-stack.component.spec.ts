import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryCardsStackComponent } from './library-cards-stack.component';
import { LibraryCardComponent } from '../../card/library-card/library-card.component';
import { LibraryCardV2Component } from '../../card/library-card-v2/library-card-v2.component';
import { CourseCardComponent } from '../../card/course-card/course-card.component';
import { LibraryCardV3Component } from '../../card/library-card-v3/library-card-v3.component';

describe('LibraryCardsStackComponent', () => {
  let component: LibraryCardsStackComponent;
  let fixture: ComponentFixture<LibraryCardsStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryCardsStackComponent,
        LibraryCardComponent,
        LibraryCardV2Component,
        LibraryCardV3Component,
        CourseCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryCardsStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
