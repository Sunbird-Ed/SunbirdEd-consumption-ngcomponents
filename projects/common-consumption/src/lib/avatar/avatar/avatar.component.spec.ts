import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { AvatarComponent } from './avatar.component';

describe('AvatarCardComponent', () => {
  let component: AvatarComponent;
  let fixture: ComponentFixture<AvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarComponent);
    component = fixture.componentInstance;
    component.config.view = "horizontal";
    fixture.detectChanges();
  });

  it('should create', () => {
    const avatarCard = fixture.debugElement.query(By.css('.sb-avatar'));
    avatarCard.nativeElement.click();
    fixture.detectChanges();
    expect(component).toBeTruthy();
    const menu = fixture.debugElement.query(By.css('.menu'));
    menu.nativeElement.click();
    fixture.detectChanges();
    component.initial = "";
    component.title = "Title";
    component.ngOnInit();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('should create', () => {
    component.initial = null;
    component.title = null;
    component.ngOnInit();
    component.config.view = "vertical";
    component.ngOnInit();
    component.indexOfMember = 11;
    component.fetchStyle();
  });
});
