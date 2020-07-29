import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TocCardComponent } from './toc-card.component';
import { TocCardType } from '../models';
import { MimeTypeMasterData } from '../../pipes-module/mime-type';
import { By } from '@angular/platform-browser';
import { courseData } from '../course-card/course-card-data';


describe('TocCardComponent', () => {
  let component: TocCardComponent;
  let fixture: ComponentFixture<TocCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TocCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TocCardComponent);
    component = fixture.componentInstance;
    component.type = TocCardType.COURSE;
    component.content = courseData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create with Toc', () => {
    const panelHeader = fixture.debugElement.query(By.css('.sbchapter__item'));
    panelHeader.nativeElement.click();
    fixture.detectChanges();
    expect(component).toBeTruthy();
    component.iconPathMap = [];
    component.getIconPath("mimeTypesData.COLLECTION");
    component.activeContent = {};
    component.activeContent.sbUniqueIdentifier = "";
    panelHeader.nativeElement.click();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});

