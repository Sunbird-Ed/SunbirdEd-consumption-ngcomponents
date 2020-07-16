import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCardComponent } from './course-card.component';
import { By } from '@angular/platform-browser';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    component.isMenu = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create Course with menu', () => {
    const courseCard = fixture.debugElement.query(By.css('.sb--card--course'));
    courseCard.nativeElement.click();
    fixture.detectChanges();
    const menu = fixture.debugElement.query(By.css('.menu'));
    menu.nativeElement.click();//.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
