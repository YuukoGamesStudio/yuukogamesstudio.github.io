import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from '@pages/about-us/about-us.component';
import { GamesComponent } from '@pages/games/games.component';
import { HomeComponent } from '@pages/home/home.component';
import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { PresskitComponent } from '@pages/presskit/presskit.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Yuuko Games - Homemade Videogames'
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    title: 'About us - Yuuko Games'
  },
  {
    path: 'games',
    component: GamesComponent,
    title: 'Games - Yuuko Games'
  },
  {
    path: 'presskit',
    component: PresskitComponent,
    title: 'Presskit - Yuuko Games'
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Page not found - Yuuko Games'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
