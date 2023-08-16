import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompassLandingPageComponent } from './compass-landing-page/compass-landing-page.component';
import { BasicComponentsComponent } from './basic-components/basic-components.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TypographyComponent } from './typography/typography.component';
import { LernLandingPageComponent } from './lern-landing-page/lern-landing-page.component';

const routes: Routes = [
  { path:'', component:DashboardComponent, 
    children:[
        { path:'typography', component: TypographyComponent},
        { path:'basic', component:BasicComponentsComponent },
        { path:'landing', component: CompassLandingPageComponent },
        { path: 'lern', component: LernLandingPageComponent}
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompassLibRoutingModule { }
