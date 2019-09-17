import { NgModule } from '@angular/core';
import { CardModule } from './card/card.module';
import { LayoutModule } from './layout/layout.module';
import { ModalModule } from './modal/modal.module';

@NgModule({
  declarations: [],
  imports: [
    CardModule,
    ModalModule,
    LayoutModule
  ],
  exports: [
    CardModule,
    ModalModule,
    LayoutModule
  ]
})
export class ConsumptionComponentsModule { }
