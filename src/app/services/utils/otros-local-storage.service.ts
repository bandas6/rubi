import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class OtrosLocalStorageService {

  private http = inject(HttpClient);

  storageSubject = new BehaviorSubject({});

  private URL_API = environment.URL_API;

  constructor() {}

  async guardarInfo(key: string = "", info: any): Promise<any> {
    try {
      await localStorage.setItem(key, info);
    } catch (error) {
      console.error('Error al guardar el usuario:', error);
      return false;
    }
  }

  obtenerInfo(key: string): any {
    return JSON.stringify(localStorage.getItem(key));
  }

  eliminarInfo(key: string) {
    localStorage.removeItem(key);
  }

  get storageChanges() {
    return this.storageSubject.asObservable();
  }
  
}
