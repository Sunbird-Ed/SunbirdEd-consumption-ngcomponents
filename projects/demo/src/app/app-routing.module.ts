import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { CourseCuriculumCardComponent } from './components/course-curiculum-card/course-curiculum-card.component';
import { GroupCardComponent } from './components/group-card/group-card.component';
import { HomeComponent } from './components/home/home.component';
import { LibraryCardV2Component } from './components/library-card-v2/library-card-v2.component';
import { LibraryCardV3Component } from './components/library-card-v3/library-card-v3.component';
import { LibraryCardV4Component } from './components/library-card-v4/library-card-v4.component';
import { LibraryCardComponent } from './components/library-card/library-card.component';
import { MemberCardComponent } from './components/member-card/member-card.component';
import { MyCourseCardComponent } from './components/my-course-card/my-course-card.component';
import { CompassLandingPageComponent } from './components/compass-landing-page/compass-landing-page.component';

@NgModule({
  declarations: [
    // HomeComponent,
    // GroupCardComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'group-card', component: GroupCardComponent },
      { path: 'library-card', component: LibraryCardComponent },
      { path: 'library-card-v2', component: LibraryCardV2Component },
      { path: 'library-card-v3', component: LibraryCardV3Component },
      { path: 'library-card-v4', component: LibraryCardV4Component },
      { path: 'member-card', component: MemberCardComponent },
      { path: 'course-card', component: CourseCardComponent },
      { path: 'course-curiculum-card', component: CourseCuriculumCardComponent },
      { path: 'home', component: HomeComponent },
      { path: 'my-course-card', component: MyCourseCardComponent },
      { path: 'compass-landing-page', component: CompassLandingPageComponent },
      { path: '**', redirectTo: 'home' },
      
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
})

export class AppRoutingModule { }
