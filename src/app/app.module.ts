import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './Components/heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './Components/hero-detail/hero-detail.component';
import { MessagesComponent } from './Components/messages/messages.component';

@NgModule({
  declarations: [AppComponent, MessagesComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HeroesComponent],
})
export class AppModule {}
