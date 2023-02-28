import { Component, HostListener } from '@angular/core';
import { applyParalax, getParalaxScroll } from '../utils/utils'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'atmos';
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    getParalaxScroll(event)((offset) => {
      applyParalax(document.getElementsByTagName('app-root')[0] as HTMLElement, 'backgroundPositionX', -0.4, offset)
    })
  }
}
