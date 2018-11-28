import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopupsRoutingModule } from './popups-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    PopupsRoutingModule
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class PopupsModule { }
