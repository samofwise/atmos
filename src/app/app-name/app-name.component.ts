import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-app-name',
  template: '<h1 [style.fontSize]="fontSize">atmos</h1>',
  styles: ['h1 { font-family: Comfortaa; color: #fff; text-transform: lowercase; margin: 0; }']
})
export class AppNameComponent {
  @Input('font-size') fontSize: string = '20px';
}
