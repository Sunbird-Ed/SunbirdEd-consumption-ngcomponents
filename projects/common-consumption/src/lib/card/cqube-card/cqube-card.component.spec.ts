import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CqubeCardComponent } from './cqube-card.component';

describe('CqubeCardComponent', () => {
  let component: CqubeCardComponent;
  let fixture: ComponentFixture<CqubeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CqubeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CqubeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
