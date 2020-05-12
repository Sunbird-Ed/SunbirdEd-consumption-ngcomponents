import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TocCurriculumComponent } from './toc-curriculum.component';

describe('TocCurriculumComponent', () => {
  let component: TocCurriculumComponent;
  let fixture: ComponentFixture<TocCurriculumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TocCurriculumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TocCurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
