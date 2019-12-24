import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TocCardComponent } from './toc-card.component';

describe('TocCardComponent', () => {
  let component: TocCardComponent;
  let fixture: ComponentFixture<TocCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TocCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TocCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
