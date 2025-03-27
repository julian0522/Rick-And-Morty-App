import { Routes } from '@angular/router';
import { CharactersComponent } from './pages/characters/characters.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { RickAndMortyLayoutComponent } from './layout/rick-and-morty-layout/rick-and-morty-layout.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';


export const RickAndMortyroutes : Routes = [
  {
    path: '',
    component: RickAndMortyLayoutComponent,
    children: [
      {
        path: 'characters',
        title: 'Personajes',
        component: CharactersComponent
      },
      {
        path: 'locations',
        title: 'Ubicaciones',
        component: LocationsComponent
      },
      {
        path: 'episodes',
        title: 'Episodios',
        component: EpisodesComponent
      },
      {
        path: 'character/:id',
        component: CharacterDetailComponent
      },
      {
        path: '**',
        redirectTo: 'characters'
      }
    ]
  }
]
