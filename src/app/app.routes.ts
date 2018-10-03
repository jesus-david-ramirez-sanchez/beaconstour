import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SinglePageComponent } from './single-page/single-page.component';
import { ViewComponent } from './view/view.component';



export const router: Routes = [
    { path: '', redirectTo: 'view', pathMatch: 'full' },
    { path: 'view', component: ViewComponent},
    { path: 'single', component: SinglePageComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
