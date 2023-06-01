import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCourseCardComponent } from './my-course-card.component';

describe('MyCourseCardComponent', () => {
  let component: MyCourseCardComponent;
  let fixture: ComponentFixture<MyCourseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCourseCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
