import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ImpressumComponent } from './impressum/impressum.component'

export const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'test', component: LandingPageComponent},
  {path: 'impressum', component: ImpressumComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  