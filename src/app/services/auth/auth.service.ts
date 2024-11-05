import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http = inject(HttpClient);
  URL_API = environment.URL_API;

  constructor(){}

  login(body:any){
    return this.http.post(`${this.URL_API}/auth`,body);
  } 

  guardarUsuario(usuario: string) {
    localStorage.setItem('usuario', usuario);
  }

  obtenerUsuario() {
    return localStorage.getItem('usuario');
  }

  eliminarUsuario() {
    localStorage.removeItem('usuario');

  }
  
}