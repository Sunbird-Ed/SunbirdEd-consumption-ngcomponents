import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupCardComponent } from './components/group-card/group-card.component';
import { HomeComponent } from './components/home/home.component';
import { LibraryCardComponent } from './components/library-card/library-card.component';

@NgModule({
  declarations: [
    // HomeComponent,
    // GroupCardComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'group-card', component: GroupCardComponent },
      { path: 'library-card', component: LibraryCardComponent },
      { path: 'home', component: HomeComponent }
      // { path: '**', redirectTo: 'login' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
})

export class AppRoutingModule { }
