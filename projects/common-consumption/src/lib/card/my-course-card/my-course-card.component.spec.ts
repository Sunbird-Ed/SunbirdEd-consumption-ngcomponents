import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MyCourseCardComponent } from './my-course-card.component';
import { By } from '@angular/platform-browser';

describe('MyCourseCardComponent', () => {
  let component: MyCourseCardComponent;
  let fixture: ComponentFixture<MyCourseCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCourseCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const courseCard = fixture.debugElement.query(By.css('.sb--card--course'));
    courseCard.nativeElement.click();
    fixture.detectChanges();
    expect(component).toBeTruthy();
    component.course.completionPercentage = "100";
    component.fetchProgress();
    expect(component).toBeTruthy();
  });
});
