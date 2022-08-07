import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Third Party Modules
import { PrimengModule } from './modules/primeng/primeng.module';
import { AngularComponent } from './pages/angular/angular.component';
import { HnNewstoriesComponent } from './pages/hn-newstories/hn-newstories.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    HnNewstoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
