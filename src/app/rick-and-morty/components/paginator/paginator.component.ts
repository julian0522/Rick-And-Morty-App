import { Component, input, output } from '@angular/core';
import { Respuesta, RespuestaMap } from '../../interfaces/rick-and-morty.interface';

@Component({
  selector: 'app-paginator',
  imports: [],
  templateUrl: './paginator.component.html',
  styles: ``
})
export class PaginatorComponent {

  currentPage = input.required<number>();
  nextPage = input.required<number>();
  prevPage = input.required<number>();
  totalPage = input.required<number>();
  count = input.required<number>();
  placeHolder = input.required<string>();
  value = output<number>();


  changeCurrentPage(value: number){
    if (!value) return;

    this.value.emit(value);
  }
}
