import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EzComponentsModule } from 'ngx-ez-components';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EzComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
