import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBtnCardComponent } from './register-btn-card.component';

describe('RegisterBtnCardComponent', () => {
  let component: RegisterBtnCardComponent;
  let fixture: ComponentFixture<RegisterBtnCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterBtnCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterBtnCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
