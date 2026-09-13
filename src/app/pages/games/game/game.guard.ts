import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { GAMES } from '../games.model';

export const gameGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const router = inject(Router);

  // Retrieve the URL ID from the route parameters
  const urlId = route.params['id'];

  // Check if the URL ID exists in the array
  const exists = GAMES.some((game) => game.id === urlId);

  // If there's no game with this ID but it is part of the redirectLinks array, redirect to the original url
  if (!exists) {
    const game = GAMES.find((game) => game.redirectLinks.includes(urlId));
    if (game) {
      return router.navigate(['games', game.id]);
    }
  }

  // Return true if the ID exists, otherwise navigate to see all games
  return exists || router.navigate(['/games']);
};
