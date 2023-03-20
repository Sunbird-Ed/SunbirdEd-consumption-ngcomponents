import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryCardsStackComponent } from './library-cards-stack/library-cards-stack.component';
import { CardModule } from '../card/card.module';
import { LibraryCardsGridComponent } from './library-cards-grid/library-cards-grid.component';
import { CourseCardsHlistComponent } from './course-cards-hlist/course-cards-hlist.component';
import { MemberListComponent } from './member-list/member-list.component';
import { CardsGridComponent } from './cards-grid/cards-grid.component';
import { InAppNotificationComponent } from './in-app-notification/in-app-notification.component';
import { LibraryCardsHlistComponent } from './library-cards-hlist/library-cards-hlist.component';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    LibraryCardsStackComponent,
    LibraryCardsGridComponent,
    CourseCardsHlistComponent,
    MemberListComponent,
    CardsGridComponent,
    InAppNotificationComponent,
    LibraryCardsHlistComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    MatButtonModule
  ],
  exports: [
    LibraryCardsStackComponent,
    LibraryCardsGridComponent,
    CourseCardsHlistComponent,
    MemberListComponent,
    CardsGridComponent,
    InAppNotificationComponent,
    LibraryCardsHlistComponent
  ]
})
export class LayoutModule { }
