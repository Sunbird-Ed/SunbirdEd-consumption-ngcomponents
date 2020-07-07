import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TocCardComponent } from './toc-card.component';
import { TocCardType } from '../models';
import { MimeTypeMasterData } from '../../pipes-module/mime-type';


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
    component.content = {};
    component.content.mimeType = "";
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create with Course', () => {
    component.content.mimeType = "Test";
    expect(component).toBeTruthy();
  });
});

