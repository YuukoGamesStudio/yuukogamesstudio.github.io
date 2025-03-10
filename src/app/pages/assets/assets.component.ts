import { Component } from '@angular/core';
import { ASSETS } from './assets.model';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss'],
})
export class AssetsComponent {
  assets = ASSETS;
}
