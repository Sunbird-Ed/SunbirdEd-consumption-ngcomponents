import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerActionsComponent } from './player-actions/player-actions.component';
import { PlayerTocComponent } from './player-toc/player-toc.component';
import { TocItemComponent } from './toc-item/toc-item.component';
import { AccordionModule } from '../accordion/accordion.module';
import { CardModule } from '../card/card.module';
import { TocChildItemComponent } from './toc-child-item/toc-child-item.component';
import { PipesModule } from '../pipes-module/pipes-module.module';
import { TocCurriculumComponent } from './toc-curriculum/toc-curriculum.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PlayerActionsComponent,
    PlayerTocComponent,
    TocItemComponent,
    TocChildItemComponent,
    TocCurriculumComponent
  ],
  imports: [
    CommonModule,
    AccordionModule,
    CardModule,
    PipesModule,
    FormsModule
  ],
  exports: [
    PlayerActionsComponent,
    PlayerTocComponent,
    TocItemComponent,
    TocChildItemComponent,
    TocCurriculumComponent
  ]
})
export class ContentDetailsModule { }
