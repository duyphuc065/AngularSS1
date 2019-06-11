import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

import {LayoutModule} from './layout/layout.module';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
