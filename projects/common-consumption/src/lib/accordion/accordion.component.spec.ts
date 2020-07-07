import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionComponent, convertToBoolProperty } from './accordion.component';


describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should handle Open All Accordions', () => {
    component.multi = true;
    component.openAll();
    expect(component).toBeTruthy();
  });
  it('should handle Close All Accordions', () => {
    component.multi = true;
    component.openAll();
    component.closeAll();
    convertToBoolProperty("true");
    expect(component).toBeTruthy();
  });
});
