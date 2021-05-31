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
import { staticData } from './toc-data'
import { MimeTypeMasterData } from '../../pipes-module/mime-type';
import { By } from '@angular/platform-browser';
import { LibraryCardV2Component } from '../../card/library-card-v2/library-card-v2.component';
import { LibraryCardV3Component } from '../../card/library-card-v3/library-card-v3.component';

describe('TocCurriculumComponent', () => {
  let component: TocCurriculumComponent;
  let fixture: ComponentFixture<TocCurriculumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule,CommonModule,PipesModule],
      declarations: [
        TocCurriculumComponent,
        TocItemComponent,
        AccordionBodyComponent,
        AccordionHeaderComponent,
        AccordionComponent,
        AccordionItemComponent,
        LibraryCardComponent,
        MyCourseCardComponent,
        TocChildItemComponent,
        TocCardComponent,
        CourseCardComponent,
        LibraryCardV2Component,
        LibraryCardV3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TocCurriculumComponent);
    component = fixture.componentInstance;
    component.tocData = staticData.content;
    component.MimeTypeMasterData;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.setActiveContent();
    component.filterChildren({mimeType:"All"});
    component.filterChildren({mimeType:MimeTypeMasterData.COLLECTION});
    component.filterChildren({mimeType:MimeTypeMasterData.DOCS});
    component.isExpanded(4,{mimeType:MimeTypeMasterData.DOCS});
    component.fetchProgress({progressPercentage:0});
    component.fetchProgressShadow({});
    component.fetchProgressShadow({progressPercentage:100});
    component.showCompleted({progressPercentage:100});
    component.getRollup(staticData.content,"");
    component.isShowBody(staticData.content,true);
    component.isShowBody(staticData.content,false);
    expect(component).toBeTruthy();
    component.ngOnChanges({tocData: staticData.content});
    expect(component).toBeTruthy();
  });
  it('should create with All Filters', () => {
    component.setActiveContent();
    component.activeMimeTypeFilter = MimeTypeMasterData.DOCS;
    component.filterChildren({mimeType:"All"});
    component.filterChildren({mimeType:MimeTypeMasterData.COLLECTION});
    component.filterChildren({mimeType:MimeTypeMasterData.DOCS});
    component.isExpanded(4,{mimeType:MimeTypeMasterData.DOCS});
    component.fetchProgress({});
    component.fetchProgressShadow({});
    component.showCompleted({progressPercentage:0});
    expect(component).toBeTruthy();
  });
  it('should do chapter click',() => {
    const panelHeader = fixture.debugElement.query(By.css('.sb-curiculum__chapter'));
    panelHeader.nativeElement.click();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
