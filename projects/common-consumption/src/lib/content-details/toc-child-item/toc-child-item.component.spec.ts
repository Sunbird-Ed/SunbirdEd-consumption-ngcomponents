import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TocChildItemComponent } from './toc-child-item.component';

describe('TocChildItemComponent', () => {
  let component: TocChildItemComponent;
  let fixture: ComponentFixture<TocChildItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TocChildItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TocChildItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
