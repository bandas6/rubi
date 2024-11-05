import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../services/token/token.service';

export const authGuard: CanActivateFn = async (route, state) => {

  const tokenService = inject(TokenService);

  const router = inject(Router);

  let token;
  await JSON.stringify(tokenService.obtenerToken())
  if (!token) {
    router.navigate(['/login'])
    return false
  }
  return true;
  
};
