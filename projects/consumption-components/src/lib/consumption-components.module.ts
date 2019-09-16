import { NgModule } from '@angular/core';
import { CardModule } from './card/card.module';
import {ModalModule} from './modal/modal.module';

@NgModule({
  declarations: [],
  imports: [
    CardModule,
    ModalModule
  ],
  exports: [
    CardModule,
    ModalModule
  ]
})
export class ConsumptionComponentsModule { }
