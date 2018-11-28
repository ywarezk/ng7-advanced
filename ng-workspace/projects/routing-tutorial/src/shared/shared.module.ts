import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404SharedComponent } from './error404-shared/error404-shared.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Error404SharedComponent],
  exports: [Error404SharedComponent]
})
export class SharedModule { }
