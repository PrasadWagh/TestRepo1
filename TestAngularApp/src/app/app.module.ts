import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { T1ComponentComponent } from './t1-component/t1-component.component';

@NgModule({
  declarations: [
    AppComponent,
    T1ComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
