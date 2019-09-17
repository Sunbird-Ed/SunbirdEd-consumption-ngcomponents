import { NgModule } from '@angular/core';
import { CardModule } from './card/card.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [],
  imports: [
    CardModule,
    LayoutModule
  ],
  exports: [CardModule, LayoutModule]
})
export class ConsumptionComponentsModule { }
