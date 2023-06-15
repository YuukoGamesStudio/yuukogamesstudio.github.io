import { Component, OnInit, Sanitizer } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GAMES, Game } from '../games.model';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  game!: Game;

  embedSafeUrl: SafeUrl = '';

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id']; // Assuming the parameter name is 'id'
      this.game = GAMES.find((game) => game.id === id) ?? GAMES[0];
      this.embedSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.game.video.embed
      );
    });
  }
}
