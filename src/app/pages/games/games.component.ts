import { Component } from '@angular/core';
import { UnpicImageDirective } from '@unpic/angular';
import { GAMES } from './games.model';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
  imports: [UnpicImageDirective],
})
export class GamesComponent {
  games = GAMES;
  currentHover: string | null = null;

  toggleHover(id: string | null) {
    this.currentHover = id;
  }
}
