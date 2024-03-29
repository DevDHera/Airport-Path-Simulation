import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AirportsComponent } from './pages/airports/airports.component';


const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full', data: { animation: 'isRight' } },
  { path: 'team', component: AboutUsComponent, data: { animation: 'isLeft' } },
  { path: 'airports', component: AirportsComponent, data: { animation: 'isLeft' } },
  { path: '**', component: NotFoundComponent, data: { animation: 'isLeft' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
