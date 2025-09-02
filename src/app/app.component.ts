import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
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
      { property: 'og:url', content: 'https://www.yuukogames.com/' },
      {
        property: 'og:image',
        content: 'https://www.yuukogames.com/assets/img/logo.webp',
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
