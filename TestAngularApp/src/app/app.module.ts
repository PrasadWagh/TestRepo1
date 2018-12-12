import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { T1ComponentComponent } from './t1-component/t1-component.component';
import { T2ComponentComponent } from './t2-component/t2-component.component';

@NgModule({
  declarations: [
    AppComponent,
    T1ComponentComponent,
    T2ComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
