import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupCardComponent } from './group-card.component';
import { By } from '@angular/platform-browser';

describe('GroupCardComponent', () => {
  let component: GroupCardComponent;
  let fixture: ComponentFixture<GroupCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupCardComponent);
    component = fixture.componentInstance;
    component.group = {};
    component.group.initial = "";
    component.group.cardBgColor = "";
    component.group.cardTitleColor = "";
    fixture.detectChanges();
  });

  it('should create', () => {
    component.group = {};
    component.cardBgColor = null;
    component.cardTitleColor = null;
    component.fetchInitialStyle();
    component.fetchStyle();
    component.ngOnInit();
    
    const courseCard = fixture.debugElement.query(By.css('.sb--card--course--curiculum'));
    courseCard.nativeElement.click();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
