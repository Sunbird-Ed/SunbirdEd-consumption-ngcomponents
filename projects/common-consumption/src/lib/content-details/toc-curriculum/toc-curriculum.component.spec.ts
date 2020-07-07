import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TocCurriculumComponent } from './toc-curriculum.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../../pipes-module/pipes-module.module';
import { TocItemComponent } from '../toc-item/toc-item.component';
import { AccordionHeaderComponent } from '../../accordion/accordion-header/accordion-header.component';
import { AccordionComponent } from '../../accordion/accordion.component';
import { AccordionItemComponent } from '../../accordion/accordion-item/accordion-item.component';
import { LibraryCardComponent } from '../../card/library-card/library-card.component';
import { MyCourseCardComponent } from '../../card/my-course-card/my-course-card.component';
import { TocChildItemComponent } from '../toc-child-item/toc-child-item.component';
import { TocCardComponent } from '../../card/toc-card/toc-card.component';
import { AccordionBodyComponent } from '../../accordion/accordion-body/accordion-body.component';
import { CourseCardComponent } from '../../card/course-card/course-card.component';

describe('TocCurriculumComponent', () => {
  let component: TocCurriculumComponent;
  let fixture: ComponentFixture<TocCurriculumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule,CommonModule,PipesModule],
      declarations: [ TocCurriculumComponent,TocItemComponent, AccordionBodyComponent,AccordionHeaderComponent,
        AccordionComponent,AccordionItemComponent,LibraryCardComponent,MyCourseCardComponent,
      TocChildItemComponent,TocCardComponent,CourseCardComponent ]
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
