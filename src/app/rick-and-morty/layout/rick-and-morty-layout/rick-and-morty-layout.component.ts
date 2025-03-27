import { Component } from '@angular/core';
import { MenuComponent } from "../../../shared/components/menu/menu.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-rick-and-morty-layout',
  imports: [MenuComponent, RouterOutlet],
  templateUrl: './rick-and-morty-layout.component.html',
  styles: ``
})
export class RickAndMortyLayoutComponent {

}
