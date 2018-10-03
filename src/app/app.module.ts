import { HeaderComponent } from './single-page/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { SinglePageComponent } from './single-page/single-page.component';
import { FinctionsComponent } from './single-page/finctions/finctions.component';
import { DinamicaComponent } from './single-page/dinamica/dinamica.component';
import { PremiosComponent } from './single-page/premios/premios.component';
import { ContactComponent } from './single-page/contact/contact.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { routes } from './app.routes';
import { environment } from 'src/environments/environment';
import { NgxMasonryModule } from 'ngx-masonry';



@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    SinglePageComponent,
    HeaderComponent,
    FinctionsComponent,
    DinamicaComponent,
    PremiosComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    routes,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NgxMasonryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
