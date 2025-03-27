import { Component, inject, signal } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { ListLocationComponent } from '../../components/list-location/list-location.component';
import { PaginatorComponent } from '../../components/paginator/paginator.component';

@Component({
  selector: 'app-locations',
  imports: [SearchInputComponent, ListLocationComponent, PaginatorComponent],
  templateUrl: './locations.component.html',
  styles: ``
})
export class LocationsComponent {

  rickAndMortyService = inject(RickAndMortyService);

  currentPage = signal<number>(1);

  searchInput = signal<string>('');

  locationResource = rxResource({
    request: () => ({page: this.currentPage(), query: this.searchInput()}),
    loader: ({request}) => {
      return this.rickAndMortyService.getAllLocations(request.page, request.query);
    }
  });

  searchByName(name: string){
    this.currentPage.set(1);
    this.searchInput.set(name);
  }

  changeCurrentPage(page: number) {
    if (!page) return;

    if (page > this.currentPage()){
      this.currentPage.update((current) => current + 1);
    }
    else if (page < this.currentPage()) {
      this.currentPage.update((current) => current - 1);
    }
  }
}
