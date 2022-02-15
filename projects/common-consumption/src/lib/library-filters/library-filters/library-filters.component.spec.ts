import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LibraryFiltersComponent } from './library-filters.component';
import {staticData} from '../../content-details/toc-curriculum/toc-data';
import { TocMimeTypes } from './models';

describe('LibraryFiltersComponent', () => {
  let component: LibraryFiltersComponent;
  let fixture: ComponentFixture<LibraryFiltersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.layout = component.LibraryFiltersLayout.ROUND_WITH_ICONS;
    component.tocList = staticData.content.children;
    component.ngOnChanges({});
    component.tocList = null;
    component.list = ["label1","label2"];
    component.ngOnChanges({});
    component.layout = component.LibraryFiltersLayout.ROUND
    component.ngOnChanges({});
    component.layout = component.LibraryFiltersLayout.SQUARE
    component.ngOnChanges({});
    expect(component).toBeTruthy();
  });
  it('should create With Other Filter Options', () => {
    component.fetchCorrespondingTypes(TocMimeTypes.ALL);
    component.fetchCorrespondingTypes(TocMimeTypes.AUDIO);
    component.fetchCorrespondingTypes(TocMimeTypes.COLLECTION);
    component.fetchCorrespondingTypes(TocMimeTypes.DOCS);
    component.fetchCorrespondingTypes(TocMimeTypes.INTERACTIVE);
    component.fetchCorrespondingTypes(TocMimeTypes.VIDEO);
  });
});
