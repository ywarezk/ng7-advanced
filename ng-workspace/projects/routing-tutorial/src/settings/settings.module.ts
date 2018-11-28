import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsUserComponent } from './settings-user/settings-user.component';
import { SettingsAccountComponent } from './settings-account/settings-account.component';
import { SharedModule } from '../shared/shared.module';
import { SettingsParentComponent } from './settings-parent/settings-parent.component';

@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule
  ],
  declarations: [SettingsUserComponent, SettingsAccountComponent, SettingsParentComponent]
})
export class SettingsModule { }
