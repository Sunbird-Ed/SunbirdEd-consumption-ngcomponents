import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqComponent } from './faq.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

describe('FaqComponent', () => {
  let component: FaqComponent;
  let fixture: ComponentFixture<FaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule,CommonModule],
      declarations: [ FaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should click faq panel', () => {
    const panelHeader = fixture.debugElement.query(By.css('.panel-heading'));
    panelHeader.nativeElement.click();//.triggerEventHandler('click', {});
    fixture.detectChanges();
    panelHeader.nativeElement.click();
    fixture.detectChanges();
    expect(panelHeader).toBeTruthy();
  });
  it('should click faq panel with Yes', () => {
    const panelHeader = fixture.debugElement.query(By.css('.panel-heading'));
    panelHeader.nativeElement.click();
    fixture.detectChanges();
    const panelHeaderYes = fixture.debugElement.query(By.css('#btn-yes'));
    panelHeaderYes.nativeElement.click();
    panelHeader.nativeElement.click();
    fixture.detectChanges();
    expect(panelHeader).toBeTruthy();
  });
  it('should click faq panel with Yes', () => {
    const panelHeader = fixture.debugElement.query(By.css('.panel-heading'));
    panelHeader.nativeElement.click();
    fixture.detectChanges();
    const panelHeaderNo = fixture.debugElement.query(By.css('#btn-no'));
    panelHeaderNo.nativeElement.click();
    fixture.detectChanges();
    const panelHeaderSubmit = fixture.debugElement.query(By.css('.submit-button'));
    panelHeaderSubmit.nativeElement.click();
    fixture.detectChanges();
    panelHeader.nativeElement.click();
    fixture.detectChanges();
    expect(panelHeader).toBeTruthy();
  });
});
