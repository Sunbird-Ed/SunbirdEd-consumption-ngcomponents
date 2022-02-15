import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AccordionBodyComponent } from './accordion-body.component';
import { AccordionHeaderComponent } from '../accordion-header/accordion-header.component';
import { AccordionItemComponent } from '../accordion-item/accordion-item.component';
import { AccordionComponent } from '../accordion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AccordionBodyComponent', () => {
  let component: AccordionBodyComponent;
  let fixture: ComponentFixture<AccordionBodyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      providers: [AccordionItemComponent,AccordionComponent],
      declarations: [ AccordionBodyComponent,AccordionHeaderComponent ]
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
