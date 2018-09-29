import { HeaderComponent } from './single-page/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { SinglePageComponent } from './single-page/single-page.component';
import { FinctionsComponent } from './single-page/finctions/finctions.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    SinglePageComponent,
    HeaderComponent,
    FinctionsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
