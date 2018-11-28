import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IsIdCorrectDirective } from './is-id-correct.directive';
import { AsyncValidDirective } from './async-valid.directive';
import { SelectCitiesComponent } from './select-cities/select-cities.component';

@NgModule({
  declarations: [
    AppComponent,
    IsIdCorrectDirective,
    AsyncValidDirective,
    SelectCitiesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
