import { Component } from '@angular/core';
import { HOME_DYNAMIC_TEXTS } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    class: 'display-flex',
  },
})
export class HomeComponent {
  homeDynamicTexts = HOME_DYNAMIC_TEXTS;
}
