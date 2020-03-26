import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCardsHlistComponent } from './course-cards-hlist.component';

describe('CourseCardsHlistComponent', () => {
  let component: CourseCardsHlistComponent;
  let fixture: ComponentFixture<CourseCardsHlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseCardsHlistComponent ]
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
