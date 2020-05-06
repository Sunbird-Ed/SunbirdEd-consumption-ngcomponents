import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCuriculumCardComponent } from './course-curiculum-card.component';

describe('CourseCuriculumCardComponent', () => {
  let component: CourseCuriculumCardComponent;
  let fixture: ComponentFixture<CourseCuriculumCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseCuriculumCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCuriculumCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
