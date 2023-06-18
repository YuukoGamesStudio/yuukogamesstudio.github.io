import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '@pages/home/home.component';
import { AboutUsComponent } from '@pages/about-us/about-us.component';
import { GamesComponent } from '@pages/games/games.component';
import { PresskitComponent } from '@pages/games/game/presskit/presskit.component';
import { HeaderComponent } from '@shared/header/header.component';
import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { FooterComponent } from '@shared/footer/footer.component';
import { GameComponent } from './pages/games/game/game.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/games/game/gallery/gallery.component';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { AnimatedTextComponent } from './shared/animated-text/animated-text.component';

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
    ContactComponent,
    GalleryComponent,
    AnimatedTextComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GalleryModule,
    LightboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
