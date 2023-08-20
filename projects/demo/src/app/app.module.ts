import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonConsumptionModule } from '@project-sunbird/common-consumption';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupCardComponent } from './components/group-card/group-card.component';
import { HomeComponent } from './components/home/home.component';
import { LibraryCardComponent } from './components/library-card/library-card.component';
import { LibraryCardV2Component } from './components/library-card-v2/library-card-v2.component';
import { LibraryCardV3Component } from './components/library-card-v3/library-card-v3.component';
import { LibraryCardV4Component } from './components/library-card-v4/library-card-v4.component';
import { MemberCardComponent } from './components/member-card/member-card.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { CourseCuriculumCardComponent } from './components/course-curiculum-card/course-curiculum-card.component';
import { MyCourseCardComponent } from './components/my-course-card/my-course-card.component';
import { MaterialExampleModule } from "./material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuLinksComponent } from './components/menu-links/menu-links.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GroupCardComponent,
    LibraryCardComponent,
    LibraryCardV2Component,
    LibraryCardV3Component,
    LibraryCardV4Component,
    MemberCardComponent,
    CourseCardComponent,
    CourseCuriculumCardComponent,
    MyCourseCardComponent,
    MenuLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonConsumptionModule,
    MaterialExampleModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
