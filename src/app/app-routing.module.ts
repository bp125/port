import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './landing/home/home.component';
import { AboutComponent } from './landing/about/about.component';
import { ContactComponent } from './landing/contact/contact.component';
import { HireComponent } from './landing/hire/hire.component';
import { TechComponent } from './landing/tech/tech.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'contact',component:ContactComponent},
  {path:'tech',component:TechComponent},
  {path:'hire',component:HireComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
