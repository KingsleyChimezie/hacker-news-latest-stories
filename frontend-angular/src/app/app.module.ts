// ANGULAR MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";


// THIRD PARTY MODULES
import { PrimengModule } from './modules/primeng/primeng.module';

// PAGES
import { AngularComponent } from './pages/angular/angular.component';
import { HnNewstoriesComponent } from './pages/hn-newstories/hn-newstories.component';
import { Error404Component } from './pages/error-pages/error404/error404.component';

// SHARED COMPONENTS
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    HnNewstoriesComponent,
    NavComponent,
    FooterComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    PrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
