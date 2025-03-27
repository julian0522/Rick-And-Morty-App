import { Component } from '@angular/core';
import { RickAndMortyroutes } from '../../../rick-and-morty/rick-and-morty.routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'shared-menu',
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent {

  routes = RickAndMortyroutes[0].children?.map(routeChildren => ({
    title: routeChildren.title ?? '',
    path: routeChildren.path ?? ''
  }));
}
