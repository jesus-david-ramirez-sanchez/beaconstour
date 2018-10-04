import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../app.component';
import { VideoComponent } from './video.component';
import { ViewComponent } from './../view/view.component';
import { SinglePageComponent } from '../single-page/single-page.component';



export const router: Routes = [
    { path: '', redirectTo: 'video', pathMatch: 'full' },
    { path: 'video', component: VideoComponent },
    { path: 'view', component: ViewComponent},
    { path: 'single', component: SinglePageComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
