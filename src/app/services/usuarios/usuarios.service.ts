import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

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

  guardarUsuario(body: any) {
    this.setearCabecera();
    return this.http.post(`${this.URL_API}/usuarios`, body);
  }

  actualizarUsuario(body: any, id: string) {
    return this.http.put(`${this.URL_API}/usuarios/${id}`, body, this.httpOptions)
  }

  obtenerUsuarios(parametros?: any) {

    let query: any = '';
    if (parametros) {
      query = '?';
      if (parametros.rol) {
        query += 'rol=' + parametros.rol + '&';
      }
      if (parametros.idioma) {
        query += 'idioma_id=' + parametros.idioma + '&';
      }
    }
    this.setearCabecera();
    return this.http.get(`${this.URL_API}/usuarios${query}`);

  }

  obtenerUsuario(id: any) {
    this.setearCabecera();
    return this.http.get(`${this.URL_API}/usuarios/${id}`, this.httpOptions)
  }

}
