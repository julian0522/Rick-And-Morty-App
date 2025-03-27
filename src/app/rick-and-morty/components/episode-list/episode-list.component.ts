import { Component, inject, input } from '@angular/core';
import { Character, Episode } from '../../interfaces/rick-and-morty.interface';
import { rxResource } from '@angular/core/rxjs-interop';
import { forkJoin, of } from 'rxjs';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-episode-list',
  imports: [DatePipe],
  templateUrl: './episode-list.component.html',
  styles: ``
})
export class EpisodeListComponent {

  episodes = input.required<Episode[]>();
  isLoading = input.required<boolean>();
  errorMessage = input.required<string | unknown | null>();

}
