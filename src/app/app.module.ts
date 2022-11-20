import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackOfficeModule } from './back-office/back-office.module';

import { PanierComponent } from './front-office/panier/PanierComponent.1';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BackOfficeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
