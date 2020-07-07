import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionBodyComponent } from './accordion-body.component';
import { AccordionHeaderComponent } from '../accordion-header/accordion-header.component';
import { AccordionItemComponent } from '../accordion-item/accordion-item.component';

describe('AccordionBodyComponent', () => {
  let component: AccordionBodyComponent;
  let fixture: ComponentFixture<AccordionBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionBodyComponent,AccordionHeaderComponent, AccordionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
