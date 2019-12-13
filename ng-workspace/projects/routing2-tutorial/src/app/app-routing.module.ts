import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'modal',
                outlet: 'popups',
                loadChildren: '../settings/settings.module#SettingsModule'
            }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}