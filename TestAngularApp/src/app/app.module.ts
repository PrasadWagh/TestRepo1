import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { T1ComponentComponent } from './t1-component/t1-component.component';
import { T3ComponentComponent } from './t3-component/t3-component.component';
import { T4ComponentComponent } from './t4-component/t4-component.component';

@NgModule({
  declarations: [
    AppComponent,
    T1ComponentComponent,
    T3ComponentComponent,
    T4ComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
