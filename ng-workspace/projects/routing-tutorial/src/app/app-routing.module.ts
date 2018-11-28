import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { Error404PageComponent } from './error404-page/error404-page.component';
import { MatrixComponent } from './matrix/matrix.component';
import { SearchComponent } from './search/search.component';

// /matrix/:id/:message => MatrixPage /matrix/123/hello-world
// /search?q=<string>

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'matrix/:id/:msg', component: MatrixComponent},
  {path: 'search', component: SearchComponent},
  {path: 'settings', loadChildren: '../settings/settings.module#SettingsModule'},
  {path: 'popups', outlet: 'popups', loadChildren: '../popups/popups.module#PopupsModule'},
  {path: '**', component: Error404PageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
