import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryCardComponent } from './library-card/library-card.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CardHoverComponent } from './card-hover/card-hover.component';
import { TocCardComponent } from './toc-card/toc-card.component';
import { MyCourseCardComponent } from './my-course-card/my-course-card.component';
import { CourseCuriculumCardComponent } from './course-curiculum-card/course-curiculum-card.component';
import { GroupCardComponent } from './group-card/group-card.component';
import { MemberCardComponent } from './member-card/member-card.component';
import { LibraryCardV2Component } from './library-card-v2/library-card-v2.component';
import { LibraryCardV3Component } from './library-card-v3/library-card-v3.component';
import { LibraryCardV4Component } from './library-card-v4/library-card-v4.component';
import { NotificationCardComponent } from './notification-card/notification-card.component';
import {BannerCardComponent} from './banner-card/banner-card.component';
import { TruncatedEllipsisComponent } from './truncated-ellipsis/truncated-ellipsis.component';

@NgModule({
  declarations: [
    LibraryCardComponent,
    CourseCardComponent,
    CardHoverComponent,
    TocCardComponent,
    MyCourseCardComponent,
    CourseCuriculumCardComponent,
    GroupCardComponent,
    MemberCardComponent,
    LibraryCardV2Component,
    LibraryCardV3Component,
    LibraryCardV4Component,
    NotificationCardComponent,
    BannerCardComponent,
    TruncatedEllipsisComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LibraryCardComponent,
    CourseCardComponent,
    CardHoverComponent,
    TocCardComponent,
    MyCourseCardComponent,
    CourseCuriculumCardComponent,
    GroupCardComponent,
    MemberCardComponent,
    LibraryCardV2Component,
    LibraryCardV3Component,
    LibraryCardV4Component,
    NotificationCardComponent,
    BannerCardComponent,
    TruncatedEllipsisComponent
  ]
})
export class CardModule { }
