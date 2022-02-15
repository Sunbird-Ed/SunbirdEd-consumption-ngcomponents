import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LibraryCardsStackComponent } from './library-cards-stack.component';
import { LibraryCardComponent } from '../../card/library-card/library-card.component';
import { LibraryCardV2Component } from '../../card/library-card-v2/library-card-v2.component';
import { CourseCardComponent } from '../../card/course-card/course-card.component';

describe('LibraryCardsStackComponent', () => {
  let component: LibraryCardsStackComponent;
  let fixture: ComponentFixture<LibraryCardsStackComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryCardsStackComponent,LibraryCardComponent,LibraryCardV2Component,CourseCardComponent ]
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
