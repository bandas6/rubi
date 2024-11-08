import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class ListasMaestrasService {

  http = inject(HttpClient);
  tokenService = inject(TokenService);

  URL_API = environment.URL_API;

  private httpOptions!: { headers: HttpHeaders };

  setearCabeceras(token: string) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': environment.CONTENT_TYPE,
        'Authorization': token ? `Bearer ${token}` : ''
      })
    };
  }

  constructor() {
    this.setearCabecera();
  }

  setearCabecera() {
    let token = this.tokenService.obtenerToken();
    console.log(token);
    if (token) {
      this.setearCabeceras(token);
    }
  }

  obtenerListasMaestrasRoles() {
    this.setearCabecera();
    return this.http.get(`${this.URL_API}/listas-maestras/roles`, this.httpOptions).pipe(
      map((res: any) => res.data.rol)
    );
  }

  obtenerListasMaestrasPaginas() {
    this.setearCabecera();
    return this.http.get(`${this.URL_API}/listas-maestras/paginas`, this.httpOptions).pipe(
      map((res: any) => res.data.paginas)
    );
  }


}
