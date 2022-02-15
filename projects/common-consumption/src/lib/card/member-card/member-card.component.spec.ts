import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MemberCardComponent } from './member-card.component';
import { By } from '@angular/platform-browser';

describe('MemberCardComponent', () => {
  let component: MemberCardComponent;
  let fixture: ComponentFixture<MemberCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberCardComponent);
    component = fixture.componentInstance;
    component.isMenu = true;
    component.config.view = "horizontal";
    fixture.detectChanges();
  });

  it('should create', () => {
    const memberCard = fixture.debugElement.query(By.css('.sb-member'));
    memberCard.nativeElement.click();
    fixture.detectChanges();
    expect(component).toBeTruthy();
    const menu = fixture.debugElement.query(By.css('.menu'));
    menu.nativeElement.click();
    fixture.detectChanges();
    component.initial = "";
    component.title = "Title";
    component.ngOnInit();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('should create', () => {
    component.initial = null;
    component.title = null;
    component.ngOnInit();
    component.config.view = "vertical";
    component.ngOnInit();
    component.indexOfMember = 11;
    component.fetchStyle();
  });
});
