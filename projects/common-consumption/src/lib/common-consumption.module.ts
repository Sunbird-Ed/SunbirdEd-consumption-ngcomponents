import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from './card/card.module';
import { LayoutModule } from './layout/layout.module';
import { ModalModule } from './modal/modal.module';
import { LibraryFiltersModule } from './library-filters/library-filters.module';
import { ContentDetailsModule } from './content-details/content-details.module';
import { FaqModule } from './faq/faq.module';
import { AccordionModule } from './accordion/accordion.module';
import { PipesModule } from './pipes-module/pipes-module.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [],
  imports: [
    CardModule,
    ModalModule,
    LayoutModule,
    LibraryFiltersModule,
    ContentDetailsModule,
    FaqModule,
    AccordionModule,
    PipesModule,
    PagesModule

  ],
  exports: [
    CardModule,
    ModalModule,
    LayoutModule,
    LibraryFiltersModule,
    ContentDetailsModule,
    FaqModule,
    AccordionModule,
    PipesModule,
    PagesModule
  ]
})
export class CommonConsumptionModule { }
