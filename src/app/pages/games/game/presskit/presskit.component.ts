import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, Meta, SafeUrl, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { GAMES, Game } from '@pages/games/games.model';
import { UnpicImageDirective } from '@unpic/angular';

@Component({
  selector: 'app-presskit',
  templateUrl: './presskit.component.html',
  styleUrls: ['./presskit.component.scss'],
  imports: [DatePipe, UnpicImageDirective],
})
export class PresskitComponent {
  game: Game = GAMES[0];
  embedSafeUrl: SafeUrl = '';

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.game = GAMES.find((game) => game.id === id) ?? GAMES[0];

      this.embedSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.game.video.embed ?? ''
      );

      this.metaService.updateTag({
        property: 'og:title',
        content: `${this.game.name} Presskit - Yuuko Games`,
      });

      this.metaService.updateTag({
        property: 'og:description',
        content: this.game.description,
      });

      this.metaService.updateTag({
        property: 'og:image',
        content: this.game.images.logo,
      });

      this.metaService.updateTag({
        property: 'og:url',
        content: `https://yuukogamesstudio.github.io/games/${this.game.id}/presskit/`,
      });

      this.titleService.setTitle(`${this.game.name} Presskit - Yuuko Games`);
    });
  }
}
