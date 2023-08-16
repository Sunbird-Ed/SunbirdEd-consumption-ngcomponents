import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicComponentsComponent } from './basic-components.component';

describe('BasicComponentsComponent', () => {
  let component: BasicComponentsComponent;
  let fixture: ComponentFixture<BasicComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
