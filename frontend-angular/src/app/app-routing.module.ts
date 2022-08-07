import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ERROR PAGES
import { Error404Component } from './pages/error-pages/error404/error404.component';

// GENERAL PAGES
import { AngularComponent } from './pages/angular/angular.component';
import { HnNewstoriesComponent } from './pages/hn-newstories/hn-newstories.component';


const routes: Routes = [
  { path: '404', component: Error404Component, title: '404 - Page Not Found' },
  { path: '', component: HnNewstoriesComponent, title: 'HN - Newest Stories' },
  { path: 'home', component: HnNewstoriesComponent, title: 'HN - Newest Stories' },
  { path: 'new', component: HnNewstoriesComponent, title: 'HN - Newest Stories' },
  { path: 'angular', component: AngularComponent, title: 'Angular Template' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload'
   })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
