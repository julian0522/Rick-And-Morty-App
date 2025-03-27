import { Routes } from '@angular/router';
import { RickAndMortyLayoutComponent } from './rick-and-morty/layout/rick-and-morty-layout/rick-and-morty-layout.component';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'rick-and-morty',
    loadChildren: () => import('./rick-and-morty/rick-and-morty.routes').then(m => m.RickAndMortyroutes)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
