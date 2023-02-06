import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonConsumptionModule } from '@project-sunbird/common-consumption';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupCardComponent } from './components/group-card/group-card.component';
import { HomeComponent } from './components/home/home.component';
import { LibraryCardComponent } from './components/library-card/library-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GroupCardComponent,
    LibraryCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonConsumptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
