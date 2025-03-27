import { Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { ListComponent } from "../../components/list/list.component";
import { PaginatorComponent } from "../../components/paginator/paginator.component";

@Component({
  selector: 'app-characters',
  imports: [SearchInputComponent, ListComponent, PaginatorComponent],
  templateUrl: './characters.component.html',
  styles: ``
})
export class CharactersComponent {

  rickAndMortyService = inject(RickAndMortyService);
  currentPage = signal<number>(1);

  searchInput = signal<string>('');

  characterResource = rxResource({
    request: () => ({page: this.currentPage(), query: this.searchInput()}),
    loader: ({request}) => {

      return this.rickAndMortyService.getAllCharacters(request.page, request.query);
    }
  });

  searcByName(name: string){
    this.searchInput.set(name);
    this.currentPage.set(1);
  }

  changeCurrentPage(page: number){
    if (!page) return;

    if (page > this.currentPage()){
      this.currentPage.update((current) => current + 1);
    }
    else if (page < this.currentPage()) {
      this.currentPage.update((current) => current - 1);
    }
  }
}
