import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { from, Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { TokenService } from '../token/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  authService = inject(AuthService);
  tokenService = inject(TokenService);
  router = inject(Router);

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(JSON.stringify(this.tokenService.obtenerToken())).pipe(
      switchMap(token => {
        if (token) {
          req = req.clone({
            setHeaders: {
              'Authorization': `Bearer ${token}`
            }
          });
        }
        return next.handle(req).pipe(
          catchError((error: HttpErrorResponse) => {
            if (error.status === 401) {
              // Manejar el error 401 aquí, por ejemplo, redirigir al login
              console.error('Unauthorized request - 401', error);
              this.cerrarSeccion();
              // Puedes redirigir al usuario a la página de login, limpiar el token, etc.
            }
            return throwError(() => error);
          })
        );
      })
    );
  }

  cerrarSeccion(){
    this.authService.eliminarUsuario();
    this.tokenService.eliminarToken();
    // Redirigir al usuario a la página de inicio de sesión, etc.
    console.log('Cerrando sesion');
    this.router.navigate(['./login'])
  }

}