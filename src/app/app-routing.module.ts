import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { RatesScreenComponent } from './rates-screen/rates-screen.component';

const routes: Routes = [
  { path: "rates/simulator-rates", component: RatesScreenComponent },
  { path: "", component: HomeScreenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
