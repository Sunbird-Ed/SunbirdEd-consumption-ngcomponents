import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularCardComponent } from './popular-card.component';

describe('PopularCardComponent', () => {
  let component: PopularCardComponent;
  let fixture: ComponentFixture<PopularCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
