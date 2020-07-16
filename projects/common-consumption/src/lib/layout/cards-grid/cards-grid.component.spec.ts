import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsGridComponent } from './cards-grid.component';
import { CourseCardComponent } from '../../card/course-card/course-card.component';
import { LibraryCardComponent } from '../../card/library-card/library-card.component';
import { courseSection } from '../course-cards-hlist/course-section-data';
import { By } from '@angular/platform-browser';

describe('CardsGridComponent', () => {
  let component: CardsGridComponent;
  let fixture: ComponentFixture<CardsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsGridComponent,CourseCardComponent,LibraryCardComponent ]
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
