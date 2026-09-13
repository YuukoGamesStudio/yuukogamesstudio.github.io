import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FEATURED_GAME } from '@pages/games/games.model';
import { AnimatedTextComponent } from '../../shared/animated-text/animated-text.component';
import { HOME_DYNAMIC_TEXTS } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    class: 'display-flex',
  },
  imports: [AnimatedTextComponent, NgClass],
})
export class HomeComponent {
  homeDynamicTexts = HOME_DYNAMIC_TEXTS;
  showVideoButton = false;

  constructor(private router: Router) {}

  goToFeaturedGame() {
    const latestGame = FEATURED_GAME;
    this.router.navigate(['games', latestGame.id]);
  }

  toggleVideo(video: HTMLVideoElement) {
    video.paused ? video.play() : video.pause();
  }
}
