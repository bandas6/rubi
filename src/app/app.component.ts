import { Component, HostBinding, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth/auth.service';
import { OtrosLocalStorageService } from './services/utils/otros-local-storage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  authService = inject(AuthService);
  otrosLocalService = inject(OtrosLocalStorageService);


  @HostBinding('style.--principal') principalColor: any;
  @HostBinding('style.--textos') textoColor: any;
  @HostBinding('style.--secundario') secundariosColor: any;
  @HostBinding('style.--textos_secundarios') textosSecundariosColor: any;
  @HostBinding('style.--texto_presentacion_modelo_uno') textoPresentacionModeloUno: any;
  @HostBinding('style.--texto_presentacion_modelo_dos') textoPresentacionModeloDos: any;

  title = 'rubiSpace';
  usuarioAuth: any;

  dataSelectContructor: any = {
    pagina: {
      numeroHeader: 1,
      numeroBody: 1
    },
    titulo: "Shopping",
    colorPrincipal: '#896500',
    textoColor: '#ffffff',
    secundariosColor: '#000000',
    textosSecundariosColor: '#000000'
  };

  constructor() {
    this.otrosLocalService.storageSubject.subscribe((res: any) => {
      this.getDataUser(); 
      if (res.recargar) {
        this.setearColores(this.usuarioAuth.pagina);
      } else if (res.sesionCerrada) {
        this.setearColoresQuemados();
      } else if (!this.usuarioAuth) {
        this.setearColoresQuemados();
      } else {
        this.setearColores(this.usuarioAuth.pagina);
      }
      //this.getDataUser();
    })
  }

  getDataUser() {
    this.usuarioAuth = this.authService.obtenerUsuario();
    this.usuarioAuth = JSON.parse(this.usuarioAuth);
  }

  setearColores(pagina: any) {
    this.principalColor = pagina.colorUno;
    this.textoColor = pagina.colorDos;
    this.secundariosColor = pagina.colorTres;
    this.textosSecundariosColor = pagina.colorCuatro;
  };

  setearColoresQuemados() {
    this.principalColor = this.dataSelectContructor.colorPrincipal;
    this.textoColor = this.dataSelectContructor.textoColor;
    this.secundariosColor = this.dataSelectContructor.secundariosColor;
    this.textosSecundariosColor = this.dataSelectContructor.textosSecundariosColor;
  }


}
