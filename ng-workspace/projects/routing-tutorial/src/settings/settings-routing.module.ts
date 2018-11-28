import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsUserComponent } from './settings-user/settings-user.component';
import { SettingsAccountComponent } from './settings-account/settings-account.component';
import { SettingsParentComponent } from './settings-parent/settings-parent.component';

// /settings/user => SettingsUserComponent
// /settings/account => SettingsAccountComponent

const routes: Routes = [
  {path: '', component: SettingsParentComponent, children: [
    {path: 'user', component: SettingsUserComponent},
    {path: 'account', component: SettingsAccountComponent},
    {path: '', redirectTo: 'user'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
