import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { GAMES } from '../games.model';

@Injectable({
  providedIn: 'root',
})
export class GameGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // Retrieve the URL ID from the route parameters
    const urlId = route.params['id'];

    // Check if the URL ID exists in the array
    const exists = GAMES.some((game) => game.id === urlId);

    // If there's no game with this ID but it is part of the redirectLinks array, redirect to the original url
    if (!exists) {
      const game = GAMES.find((game) => game.redirectLinks.includes(urlId));
      if (game) {
        return this.router.navigate(['games', game.id]);
      }
    }

    // Return true if the ID exists, otherwise navigate to see all games
    return exists || this.router.navigate(['/games']);
  }
}
