import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './landing/home/home.component';
import { NavComponent } from './header/nav/nav.component';
import { FooterComponent } from './header/footer/footer.component';
import { AboutComponent } from './landing/about/about.component';
import { ContactComponent } from './landing/contact/contact.component';
import { HireComponent } from './landing/hire/hire.component';
import { RouterLink } from '@angular/router';
import { TechComponent } from './landing/tech/tech.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    HireComponent,
    TechComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
