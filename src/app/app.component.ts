import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { fadeAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit {
  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Yuuko Games Studio - Homemade videogames',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://yuukogamesstudio.github.io/' },
      {
        property: 'og:image',
        content: 'https://yuukogamesstudio.github.io/assets/img/logo.png',
      },
      {
        property: 'og:description',
        content:
          'Yuuko Games is a two person indie studio based in Girona. We make videogames that use innovative mechanics to create immersive experiences.',
      },
      { name: 'theme-color', content: '#bc2e18' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ]);
  }
}
