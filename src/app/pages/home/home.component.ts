import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimatedTextComponent } from "../../shared/animated-text/animated-text.component";
import { HOME_DYNAMIC_TEXTS } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    class: 'display-flex',
  },
  imports: [AnimatedTextComponent],
})
export class HomeComponent {
  homeDynamicTexts = HOME_DYNAMIC_TEXTS;

  constructor(private router: Router) {}

  goToLatestGame() {
    this.router.navigate(['games', 'the-forbidden-door']);
  }
}
