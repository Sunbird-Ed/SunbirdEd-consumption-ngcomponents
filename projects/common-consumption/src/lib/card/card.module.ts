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
import { NotificationCardComponent } from './notification-card/notification-card.component';
import {BannerDiscoveryCardComponent} from './banner-discovery-card/banner-discovery-card.component';

@NgModule({
  declarations: [LibraryCardComponent, CourseCardComponent, CardHoverComponent, 
    TocCardComponent, MyCourseCardComponent, CourseCuriculumCardComponent, GroupCardComponent, 
    MemberCardComponent, LibraryCardV2Component, LibraryCardV3Component, NotificationCardComponent,
    BannerDiscoveryCardComponent],
  imports: [
    CommonModule
  ],
  exports: [LibraryCardComponent, CourseCardComponent, CardHoverComponent, TocCardComponent, 
    MyCourseCardComponent, CourseCuriculumCardComponent, GroupCardComponent, MemberCardComponent,
    LibraryCardV2Component, LibraryCardV3Component, NotificationCardComponent, BannerDiscoveryCardComponent]
})
export class CardModule { }
