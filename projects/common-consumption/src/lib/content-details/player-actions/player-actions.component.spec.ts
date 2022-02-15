import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlayerActionsComponent } from './player-actions.component';
import { By } from '@angular/platform-browser';


describe('PlayerActionsComponent', () => {
  let component: PlayerActionsComponent;
  let fixture: ComponentFixture<PlayerActionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerActionsComponent);
    component = fixture.componentInstance;
    component.actionButtons = [{label:"",name:component.ActionButtonType.FULL_SCREEN,iconPath:"",disabled:false}];
    fixture.detectChanges();
  });

  it('should create', () => {
    const panelHeader = fixture.debugElement.query(By.css('.sb-btn'));
    panelHeader.nativeElement.click();//.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
