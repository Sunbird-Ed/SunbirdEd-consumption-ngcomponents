import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsGridComponent } from './cards-grid.component';
import { CourseCardComponent } from '../../card/course-card/course-card.component';
import { LibraryCardComponent } from '../../card/library-card/library-card.component';
import { courseSection } from '../course-cards-hlist/course-section-data';
import { By } from '@angular/platform-browser';
import { LibraryCardV2Component } from '../../card/library-card-v2/library-card-v2.component';
import { LibraryCardV3Component } from '../../card/library-card-v3/library-card-v3.component';

describe('CardsGridComponent', () => {
  let component: CardsGridComponent;
  let fixture: ComponentFixture<CardsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CardsGridComponent,
        CourseCardComponent,
        LibraryCardComponent,
        LibraryCardV2Component,
        LibraryCardV3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsGridComponent);
    component = fixture.componentInstance;
    component.isMenu = true;
    component.contentList = courseSection.contents;
    component.contentList.push(component.range(10));
    fixture.detectChanges();
  });

  it('should create', () => {
    const cardClick = fixture.debugElement.query(By.css('sb-library-card'));
    cardClick.nativeElement.click();
    fixture.detectChanges();
    const menuClick = fixture.debugElement.query(By.css('.menu'));
    menuClick.nativeElement.click();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
