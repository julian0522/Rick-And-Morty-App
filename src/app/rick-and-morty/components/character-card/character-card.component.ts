import { Component, input } from '@angular/core';
import { Character } from '../../interfaces/rick-and-morty.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-character-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './character-card.component.html',
  styles: ``
})
export class CharacterCardComponent {

  character = input.required<Character>();
}
