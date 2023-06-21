import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { GAMES, Game } from '@pages/games/games.model';

@Component({
  selector: 'app-presskit',
  templateUrl: './presskit.component.html',
  styleUrls: ['./presskit.component.scss'],
})
export class PresskitComponent {
  game: Game = GAMES[0];
  embedSafeUrl: SafeUrl = '';

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.game = GAMES.find((game) => game.id === id) ?? GAMES[0];

      this.embedSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.game.video.embed
      );

      this.titleService.setTitle(`${this.game.name} Presskit - Yuuko Games`);
    });
  }
}
