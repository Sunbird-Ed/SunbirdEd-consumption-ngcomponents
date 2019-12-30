import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerActionsComponent } from './player-actions/player-actions.component';
import { PlayerTocComponent } from './player-toc/player-toc.component';
import { TocItemComponent } from './toc-item/toc-item.component';
import { AccordionModule } from '../accordion/accordion.module';
import { CardModule } from '../card/card.module';
import { TocChildItemComponent } from './toc-child-item/toc-child-item.component';
import { PipesModule } from '../pipes-module/pipes-module.module';

@NgModule({
  declarations: [
    PlayerActionsComponent,
    PlayerTocComponent,
    TocItemComponent,
    TocChildItemComponent,
  ],
  imports: [
    CommonModule,
    AccordionModule,
    CardModule,
    PipesModule
  ],
  exports: [
    PlayerActionsComponent,
    PlayerTocComponent,
    TocItemComponent,
  ]
})
export class ContentDetailsModule { }
