import { Component } from '@angular/core';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { GAMES, Game } from '@pages/games/games.model';

@Component({
  selector: 'app-presskit',
  templateUrl: './presskit.component.html',
  styleUrls: ['./presskit.component.scss'],
})
export class PresskitComponent {
  game: Game | null = null;

  constructor(private route: ActivatedRoute, private titleService: Title) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.game = GAMES.find((game) => game.id === id) ?? GAMES[0];
      this.titleService.setTitle(`${this.game.name} Presskit - Yuuko Games`);
    });
  }
}
