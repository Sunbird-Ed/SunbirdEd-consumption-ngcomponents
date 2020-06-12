import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionItemComponent, convertToBoolProperty } from './accordion-item.component';
import { AccordionComponent } from '../accordion.component';
import { of } from 'rxjs';

describe('AccordionItemComponent', () => {
  let component: AccordionItemComponent;
  let fixture: ComponentFixture<AccordionItemComponent>;
  let accordionComponentSpy: jasmine.SpyObj<AccordionComponent>;

  const setup = () => {
    if (accordionComponentSpy) {
      TestBed.configureTestingModule({
        declarations: [ AccordionItemComponent],
        providers: [{provider: AccordionComponent, useValue: accordionComponentSpy}]
      })
      .compileComponents();
    }

    TestBed.configureTestingModule({
      declarations: [ AccordionItemComponent],
      providers: [AccordionComponent]
    })
    .compileComponents();
  };

  beforeEach(async(() => {
    setup();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    component = null;
    fixture = null;
    accordionComponentSpy = null;
  });

  it('should create', () => {
    const accordionComponent = jasmine.createSpyObj('AccordionComponent', ['openCloseItems']);
    accordionComponentSpy = accordionComponent.openCloseItems.and.returnValue(of(false));
    expect(component).toBeTruthy();
    expect(component.collapsed).toBeTruthy();
  });

  it('collapsed value should be true if openCloseItems emits true', () => {
    expect(component).toBeTruthy();
  });

  it('should return true boolean value if true string passed as argument', () => {
    expect(convertToBoolProperty('true')).toBeTruthy();
  });

  it('should return true boolean value if it a empty string passed as argument', () => {
    expect(convertToBoolProperty('')).toBeTruthy();
  });

  it('should return false boolean value if it a "test" passed as argument', () => {
    expect(convertToBoolProperty('test')).toBeFalsy();
  });

  it('should return true boolean value if truthy value passed as argument', () => {
    expect(convertToBoolProperty(1)).toBeTruthy();
  });

  it('should return true boolean value if truthy value passed as argument', () => {
    expect(convertToBoolProperty(0)).toBeFalsy();
  });

  it('open method should make collapsed to false ', () => {
    component.open();
    expect(component.collapsed).toBeFalsy();
  });

  it('close method should make collapsed to true ', () => {
    component.close();
    expect(component.collapsed).toBeTruthy();
  });

  it('toggle method should make collapsed to true ', () => {
    component.collapsed = false;
    component.toggle();
    expect(component.collapsed).toBeTruthy();
  });

  it('when expanded collapsed value should be false', () => {
    component.expanded = true;
    expect(component.collapsed).toBeFalsy();
  });

});
