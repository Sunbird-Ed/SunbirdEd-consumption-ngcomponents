import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCourseCardComponent } from './my-course-card.component';

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
    expect(component).toBeTruthy();
  });
});
