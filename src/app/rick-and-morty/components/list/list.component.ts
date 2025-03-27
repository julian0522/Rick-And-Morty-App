import { Component, input } from '@angular/core';
import { Character } from '../../interfaces/rick-and-morty.interface';
import { CommonModule } from '@angular/common';
import { CharacterCardComponent } from '../character-card/character-card.component';
import { SpinnerCargaComponent } from "../../../shared/components/spinner-carga/spinner-carga.component";

@Component({
  selector: 'app-list',
  imports: [CommonModule, CharacterCardComponent, SpinnerCargaComponent],
  templateUrl: './list.component.html',
  styles: ``
})
export class ListComponent {

  characters = input.required<Character[]>();
  errorMessage = input.required<string | unknown | null>();
  isLoading = input.required<boolean>();

}
