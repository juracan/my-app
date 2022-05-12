import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEzComponentsModule } from 'ngx-ez-components';
import { NgxEzComp2Module } from 'ngx-ez-comp2'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEzComponentsModule,
    NgxEzComp2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
