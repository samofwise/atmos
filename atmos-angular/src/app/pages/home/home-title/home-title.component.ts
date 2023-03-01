import { Component, HostListener } from '@angular/core';
import { applyCustomParalax, applyParalax, getParalaxScroll } from 'src/utils/utils';

// TODO: Unify these with the definitions in the scss
const getBackgroundGradient = (o?: number) => `radial-gradient(100vw 70vh at 50vw calc(60vh + ${o ?? 0}px), #F5B92C 20%, #F27048, #C04B5E, #7B3362, #121212)`;
const getWaterGradient = (o?: number) => `radial-gradient(100vw 45vh at 50vw calc(-70px - ${o ?? 0}px), #F5B92C 20%, #F27048, #C04B5E, #7B3362, #121218)`;

@Component({
  selector: 'app-home-title',
  templateUrl: './home-title.component.html',
  styleUrls: ['./home-title.component.scss']
})
export class HomeTitleComponent {
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    getParalaxScroll(event)((offset) => {
      applyParalax(document.getElementById('stars'), 'backgroundPositionX', -0.4, offset)
      applyCustomParalax(document.getElementById('sunsetBackground'), 'background', 1, getBackgroundGradient, offset)
      applyCustomParalax(document.getElementById('sun'), 'transform', 0.7, (o) => `translate(-50%, ${o}px)`, offset)
      applyParalax(document.getElementById('reflection'), 'backgroundPositionY', -1.45, offset)
      applyCustomParalax(document.getElementById('water'), 'background', 0.5, getWaterGradient, offset)
    })
  }
}
