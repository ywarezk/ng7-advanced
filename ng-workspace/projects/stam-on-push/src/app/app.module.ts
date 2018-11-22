import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OnPushSampleComponent } from './on-push-sample/on-push-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    OnPushSampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
