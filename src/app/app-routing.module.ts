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
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'games',
    component: GamesComponent,
  },
  {
    path: 'presskit',
    component: PresskitComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
