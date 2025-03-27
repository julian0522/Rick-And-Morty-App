import { Component, input, output } from '@angular/core';

@Component({
  selector: 'rick-and-morty-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
  styles: ``
})
export class SearchInputComponent {
  placeholder = input.required<string>();
  value = output<string>();


  // Metodo para emitir el valor del campo de busqueda a los componentes padres
  onSearch(query: string){
    if (!query) return;

    this.value.emit(query);
  }
}
