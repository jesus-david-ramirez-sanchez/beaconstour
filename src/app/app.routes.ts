import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SinglePageComponent } from './single-page/single-page.component';
import { ViewComponent } from './view/view.component';
import { VideoComponent } from './video/video.component';



export const router: Routes = [
    { path: '', redirectTo: 'single', pathMatch: 'full' },
    { path: 'video', component: VideoComponent },
    { path: 'view', component: ViewComponent},
    { path: 'single', component: SinglePageComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router, { useHash: true });
