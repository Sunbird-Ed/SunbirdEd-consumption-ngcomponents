import { NgModule } from '@angular/core';
import { CardModule } from './card/card.module';
import { LayoutModule } from './layout/layout.module';
import { ModalModule } from './modal/modal.module';
import { LibraryFiltersModule } from './library-filters/library-filters.module';
import { ContentDetailsModule } from './content-details/content-details.module';
import { FaqModule } from './faq/faq.module';

@NgModule({
  declarations: [],
  imports: [
    CardModule,
    ModalModule,
    LayoutModule,
    LibraryFiltersModule,
    ContentDetailsModule,
    FaqModule
  ],
  exports: [
    CardModule,
    ModalModule,
    LayoutModule,
    LibraryFiltersModule,
    ContentDetailsModule,
    FaqModule
  ]
})
export class CommonConsumptionModule { }
