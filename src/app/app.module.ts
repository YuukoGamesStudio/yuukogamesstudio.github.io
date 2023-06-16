import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '@pages/home/home.component';
import { AboutUsComponent } from '@pages/about-us/about-us.component';
import { GamesComponent } from '@pages/games/games.component';
import { PresskitComponent } from '@pages/presskit/presskit.component';
import { HeaderComponent } from '@shared/header/header.component';
import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { FooterComponent } from '@shared/footer/footer.component';
import { GameComponent } from './pages/games/game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    GamesComponent,
    PresskitComponent,
    HeaderComponent,
    NotFoundComponent,
    FooterComponent,
    GameComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
