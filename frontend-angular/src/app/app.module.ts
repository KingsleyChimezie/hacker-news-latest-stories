import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// THIRD PARTY MODULES
import { PrimengModule } from './modules/primeng/primeng.module';

// PAGES
import { AngularComponent } from './pages/angular/angular.component';
import { HnNewstoriesComponent } from './pages/hn-newstories/hn-newstories.component';

// SHARED COMPONENTS
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    HnNewstoriesComponent,
    NavComponent,
    FooterComponent
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
