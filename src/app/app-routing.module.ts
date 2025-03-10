import { Routes } from '@angular/router';
import { AboutUsComponent } from '@pages/about-us/about-us.component';
import { AssetsComponent } from '@pages/assets/assets.component';
import { ContactComponent } from '@pages/contact/contact.component';
import { GameComponent } from '@pages/games/game/game.component';
import { GameGuard } from '@pages/games/game/game.guard';
import { PresskitComponent } from '@pages/games/game/presskit/presskit.component';
import { GamesComponent } from '@pages/games/games.component';
import { HomeComponent } from '@pages/home/home.component';
import { NotFoundComponent } from '@pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Yuuko Games - Homemade Videogames',
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    title: 'About us - Yuuko Games',
  },
  {
    path: 'games',
    component: GamesComponent,
    title: 'Games - Yuuko Games',
  },
  {
    path: 'games/:id',
    component: GameComponent,
    title: 'Game - Yuuko Games',
    canActivate: [GameGuard],
  },
  {
    path: 'games/:id/presskit',
    component: PresskitComponent,
    title: 'Game - Yuuko Games',
    canActivate: [GameGuard],
  },
  {
    path: 'assets',
    component: AssetsComponent,
    title: 'Assets - Yuuko Games',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Presskit - Yuuko Games',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Page not found - Yuuko Games',
  },
];
