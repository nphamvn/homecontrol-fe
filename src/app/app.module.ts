import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LightComponent } from './components/light/light.component';
import { NotificationComponent } from './components/notification/notification.component';
import { AppComponent } from './components/app/app.component';
@NgModule({
  declarations: [
    AppComponent,
    LightComponent,
    NotificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
