import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TocItemComponent } from './toc-item.component';
import { AccordionComponent } from '../../accordion/accordion.component';
import { AccordionBodyComponent } from '../../accordion/accordion-body/accordion-body.component';
import { AccordionHeaderComponent } from '../../accordion/accordion-header/accordion-header.component';
import { CommonModule } from '@angular/common';
import { AccordionItemComponent } from '../../accordion/accordion-item/accordion-item.component';
import { FormsModule } from '@angular/forms';
import { LibraryCardComponent } from '../../card/library-card/library-card.component';
import { MyCourseCardComponent } from '../../card/my-course-card/my-course-card.component';
import { TocChildItemComponent } from '../toc-child-item/toc-child-item.component';
import { TocCardComponent } from '../../card/toc-card/toc-card.component';
import { PipesModule } from '../../pipes-module/pipes-module.module';

describe('TocItemComponent', () => {
  let component: TocItemComponent;
  let fixture: ComponentFixture<TocItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule,CommonModule,PipesModule],
      declarations: [ TocItemComponent, AccordionBodyComponent,AccordionHeaderComponent,
        AccordionComponent,AccordionItemComponent,LibraryCardComponent,MyCourseCardComponent,
      TocChildItemComponent,TocCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TocItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
