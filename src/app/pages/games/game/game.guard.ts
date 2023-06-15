import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
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

    // Return true if the ID exists, otherwise navigate to a different route
    return exists || this.router.createUrlTree(['/not-found']);
  }
}
