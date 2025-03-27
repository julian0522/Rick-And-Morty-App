import { Component, inject, signal } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { EpisodeListComponent } from '../../components/episode-list/episode-list.component';
import { PaginatorComponent } from '../../components/paginator/paginator.component';

@Component({
  selector: 'app-episodes',
  imports: [SearchInputComponent, EpisodeListComponent, PaginatorComponent],
  templateUrl: './episodes.component.html',
  styles: ``
})
export class EpisodesComponent {
  rickAndMortyService = inject(RickAndMortyService);
  currentPage = signal<number>(1);
  searchInput = signal<string>('');

  episodesRosource = rxResource({
    request: () => ({page: this.currentPage(), query: this.searchInput()}),
    loader: ({request}) => {
      return this.rickAndMortyService.getAllEpisodes(request.page, request.query);
    }
  });

  searchByname(name: string){
    this.currentPage.set(1);
    this.searchInput.set(name);
  }

  changeCurrentPage(page: number){
    if (!page) return;

    if (page > this.currentPage())
      this.currentPage.update( current => current + 1);
    else if (page < this.currentPage())
      this.currentPage.update(current => current - 1);
  }
}
