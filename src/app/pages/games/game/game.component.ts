import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { GAMES, Game } from '../games.model';
import { GalleryComponent } from "./gallery/gallery.component";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  imports: [GalleryComponent],
})
export class GameComponent implements OnInit {
  game!: Game;
  embedSafeUrl: SafeUrl = '';
  currentId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.game = GAMES.find((game) => game.id === id) ?? GAMES[0];
      this.titleService.setTitle(`${this.game.name} - Yuuko Games`);
      this.embedSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.game.video.embed
      );
    });
  }

  openImage(index: number | null): void {
    this.currentId = index;
    console.log(this.currentId);
  }
}
