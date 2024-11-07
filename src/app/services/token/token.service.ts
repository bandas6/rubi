import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {


  constructor() {
  }

  guardarToken(token: string) {
    localStorage.setItem('token', JSON.stringify(token));
  }

  obtenerToken() {
    return localStorage.getItem('token'); // Devuelve la promesa directamente
  }

  eliminarToken() {
    localStorage.removeItem('token');
  }

}