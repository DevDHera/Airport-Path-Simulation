import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';


const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'team', component: AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
