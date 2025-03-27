import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Location } from '../../interfaces/rick-and-morty.interface';
import { SpinnerCargaComponent } from "../../../shared/components/spinner-carga/spinner-carga.component";

@Component({
  selector: 'app-list-location',
  imports: [CommonModule, SpinnerCargaComponent],
  templateUrl: './list-location.component.html',
  styles: ``
})
export class ListLocationComponent {
  locations = input.required<Location[]>();
  errorMessage = input.required<string | unknown | null>();
  isLoading = input.required<boolean>();
}
