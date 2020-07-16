import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCardsHlistComponent } from './course-cards-hlist.component';
import { CourseCardComponent } from '../../card/course-card/course-card.component';
import { MyCourseCardComponent } from '../../card/my-course-card/my-course-card.component';
import { CourseCuriculumCardComponent } from '../../card/course-curiculum-card/course-curiculum-card.component';
import { CourseCardGridTypes } from '../../card/models';
import { By } from '@angular/platform-browser';
import { myCourses } from './my-courses-data';
import { courseSection } from './course-section-data';

describe('CourseCardsHlistComponent', () => {
  let component: CourseCardsHlistComponent;
  let fixture: ComponentFixture<CourseCardsHlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseCardsHlistComponent,CourseCardComponent,MyCourseCardComponent,CourseCuriculumCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCardsHlistComponent);
    component = fixture.componentInstance;
    component.type = component.CourseCardGridTypes.MY_COURSE_CARD_GRID;
    component.contentList = myCourses.courses;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create My Course Grid', () => {
    component.type = CourseCardGridTypes.MY_COURSE_CARD_GRID;
    component.CourseCardGridTypes;
    component.CourseCardTypes;
    component.range(5);
    component.ngOnInit();
    component.ngOnChanges({});
    const cardClick = fixture.debugElement.query(By.css('sb-my-course-card'));
    cardClick.nativeElement.click();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('should create Course Grid', () => {
    component.type = CourseCardGridTypes.COURSE_CARD_GRID;
    component.contentList = courseSection.contents;
    fixture.detectChanges();
    const cardClick = fixture.debugElement.query(By.css('sb-course-card'));
    cardClick.nativeElement.click();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('should create Course Grid', () => {
    component.type = CourseCardGridTypes.MY_COURSE_RECENTLY_VIEWED_CARD_GRID;
    component.contentList = null;
    component.ngOnInit();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('should create Course Grid without input', () => {
    component.type = CourseCardGridTypes.CURICULUM_COURSE_CARD_GRID;
    component.contentList = null;
    component.ngOnInit();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('should create Course Grid without input', () => {
    component.type = null;
    component.contentList = null;
    component.ngOnInit();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
