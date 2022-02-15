import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AccordionHeaderComponent } from './accordion-header.component';
import { AccordionItemComponent } from '../accordion-item/accordion-item.component';
import { AccordionComponent } from '../accordion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AccordionHeaderComponent', () => {
  let component: AccordionHeaderComponent;
  let fixture: ComponentFixture<AccordionHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      providers: [AccordionItemComponent,AccordionComponent],
      declarations: [ AccordionHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    component.toggle();
    component.state;
    expect(component).toBeTruthy();
  });
 

});
