import { Component } from '@angular/core';
import { routes } from '../app-routing.module';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  events: string[] = [];
  opened: boolean = false;
  links = routes;
}
