import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { PlayerActionsComponent } from './player-actions/player-actions.component';
import { PlayerDescriptionComponent } from './player-description/player-description.component';
import { PlayerTocComponent } from './player-toc/player-toc.component';


@NgModule({
  declarations: [
    PlayerComponent,
    PlayerActionsComponent,
    PlayerDescriptionComponent,
    PlayerTocComponent
  ],
  imports: [
    CommonModule
  ], 
  exports:[
    PlayerComponent,
    PlayerActionsComponent,
    PlayerDescriptionComponent,
    PlayerTocComponent
  ]
})
export class ContentDetailsModule { }
