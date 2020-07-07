import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCourseCardComponent } from './my-course-card.component';
import { By } from '@angular/platform-browser';

describe('MyCourseCardComponent', () => {
  let component: MyCourseCardComponent;
  let fixture: ComponentFixture<MyCourseCardComponent>;

  beforeEach(async(() => {
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
  });
});
