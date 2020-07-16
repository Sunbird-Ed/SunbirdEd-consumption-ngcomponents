import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCuriculumCardComponent } from './course-curiculum-card.component';
import { By } from '@angular/platform-browser';

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
    component.cardData = {};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create Card with Click', () => {
    const courseCard = fixture.debugElement.query(By.css('.sb--card--course--curiculum'));
    courseCard.nativeElement.click();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
