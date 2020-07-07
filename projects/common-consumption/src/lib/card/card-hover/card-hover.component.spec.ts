import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHoverComponent } from './card-hover.component';
import { By } from '@angular/platform-browser';

describe('CardHoverComponent', () => {
  let component: CardHoverComponent;
  let fixture: ComponentFixture<CardHoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardHoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHoverComponent);
    component = fixture.componentInstance;
    component.hoverData = {};
    component.hoverData.actions = [{type:"save",label:"save"},
    {type:"download",label:"download"},{type:"open",label:"open"}]
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    const panelHeader = fixture.debugElement.query(By.css('.sb-btn-grow'));
    panelHeader.nativeElement.click();//.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
