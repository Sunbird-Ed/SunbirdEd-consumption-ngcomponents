import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCardsHlistComponent } from './course-cards-hlist.component';
import { CourseCardComponent } from '../../card/course-card/course-card.component';
import { MyCourseCardComponent } from '../../card/my-course-card/my-course-card.component';
import { CourseCuriculumCardComponent } from '../../card/course-curiculum-card/course-curiculum-card.component';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
