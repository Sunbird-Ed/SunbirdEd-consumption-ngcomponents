import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

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
import { MimeTypeMasterData } from '../../pipes-module/mime-type';
import { staticData } from '../toc-curriculum/toc-data';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LibraryCardV2Component } from '../../card/library-card-v2/library-card-v2.component';
import { QueryList } from '@angular/core';

describe('TocItemComponent', () => {
  let component: TocItemComponent;
  let fixture: ComponentFixture<TocItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule,CommonModule,PipesModule,BrowserAnimationsModule],
      declarations: [ TocItemComponent, AccordionBodyComponent,AccordionHeaderComponent,
        AccordionComponent,AccordionItemComponent,LibraryCardComponent,MyCourseCardComponent,
      TocChildItemComponent,TocCardComponent, LibraryCardV2Component]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TocItemComponent);
    component = fixture.componentInstance;
    component.tocData = staticData.content;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.setActiveContent();
    component.activeMimeTypeFilter = MimeTypeMasterData.VIDEO;
    component.filterChildren({mimeType:"All"});
    component.filterChildren({mimeType:MimeTypeMasterData.COLLECTION});
    component.filterChildren({mimeType:MimeTypeMasterData.DOCS});
   // component.isExpanded(4,{mimeType:MimeTypeMasterData.DOCS});
    component.selectAllItems(true);
    component.selectAllItems(false);
    expect(component).toBeTruthy();
    component.getRollup(staticData.content,"");
    component.isShowBody(staticData.content,true);
    component.isShowBody(staticData.content,false);
    expect(component).toBeTruthy();
    component.ngOnChanges({tocData: staticData.content});
    expect(component).toBeTruthy();
  });
  it('should create Chapter Click', () => {

  });

  describe('when expandMode is single and an accordion item is toggled', () => {
    it('should close all other accordion items', () => {
      // arrange
      const mockMockAccordionItem: Partial<AccordionItemComponent> = { expanded: true };
      const mockMockOtherAccordionItem: Partial<AccordionItemComponent> = { expanded: true };

      component.expandMode = 'single';
      component.accordionItems = new QueryList<AccordionItemComponent>();
      component.accordionItems.reset([
        mockMockAccordionItem as AccordionItemComponent,
        mockMockOtherAccordionItem as AccordionItemComponent
      ]);

      // act
      component.collapsedChangeHandler(false, mockMockAccordionItem as AccordionItemComponent);

      // assert
      expect(mockMockOtherAccordionItem.expanded).toBe(false);
    });
  });
});
