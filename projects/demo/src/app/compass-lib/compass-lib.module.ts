import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonConsumptionModule } from '@project-sunbird/common-consumption';

import { CompassLibRoutingModule } from './compass-lib-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompassLandingPageComponent } from '../compass-lib/compass-landing-page/compass-landing-page.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';

import { BasicComponentsComponent } from './basic-components/basic-components.component';
import { TypographyComponent } from './typography/typography.component';

@NgModule({
  declarations: [
    DashboardComponent,
    BasicComponentsComponent,
    TypographyComponent,
    CompassLandingPageComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatListModule,
    MatDividerModule,
    CompassLibRoutingModule,
    CommonConsumptionModule
  ]
})
export class CompassLibModule { }
