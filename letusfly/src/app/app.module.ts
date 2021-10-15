import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarsComponent } from './bars/bars.component';
import { HomeComponent } from './home/home.component';
import { CustchoiceComponent } from './custchoice/custchoice.component';
import { OffersComponent } from './offers/offers.component';
import { ImpressumComponent } from './impressum/impressum.component';


@NgModule({
  declarations: [
    AppComponent,
    BarsComponent,
    HomeComponent,
    CustchoiceComponent,
    OffersComponent,
    ImpressumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
