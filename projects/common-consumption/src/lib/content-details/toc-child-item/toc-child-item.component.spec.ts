import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TocChildItemComponent } from './toc-child-item.component';
import { TocCardComponent } from '../../card/toc-card/toc-card.component';
import { PipesModule } from '../../pipes-module/pipes-module.module';

describe('TocChildItemComponent', () => {
  let component: TocChildItemComponent;
  let fixture: ComponentFixture<TocChildItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PipesModule],
      declarations: [ TocChildItemComponent,TocCardComponent ]
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
    component.hasMimeType(null,"",{});
    expect(component).toBeTruthy();
  });
});
