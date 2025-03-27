import { Component, effect, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { EpisodeListComponent } from "../episode-list/episode-list.component";
import { CommonModule } from '@angular/common';
import { SpinnerCargaComponent } from '../../../shared/components/spinner-carga/spinner-carga.component';
import { forkJoin, of } from 'rxjs';

@Component({
  selector: 'app-character-detail',
  imports: [EpisodeListComponent ,CommonModule, SpinnerCargaComponent],
  templateUrl: './character-detail.component.html',
  styles: ``
})
export class CharacterDetailComponent {

  //* Creamos una señal para el id del personaje, escuchando cambios en la ruta
  private route = inject(ActivatedRoute);
  private idCharacter = signal<string | null>(null);
  private characterService = inject(RickAndMortyService);

  constructor(){
    //* Actualizar el id cuando cambie la ruta
    effect(() => {
      this.route.paramMap.subscribe(params => {
        this.idCharacter.set(params.get('id'));
      });
    });
  }

  characterResource = rxResource({
    request: () => ({id: this.idCharacter()}),
    loader: ({request}) => {
      return this.characterService.searchCharacterById(request.id!);
    }
  });

  episodeResource = rxResource({
    request: () => ({ episodes: this.characterResource.value()?.episode ?? [] }),
    loader: ({ request }) => {
      if (!request.episodes.length) return of([]);

      const requests = request.episodes.map((ruta) =>
        this.characterService.searchEpisodeByUrl(ruta)
      );

      return forkJoin(requests);
    }
  });

}
