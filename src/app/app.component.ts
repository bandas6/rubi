import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rubiSpace';

  @HostBinding('style.--principal') principalColor: any;
  @HostBinding('style.--textos') textoColor: any;
  @HostBinding('style.--secundario') secundariosColor: any;
  @HostBinding('style.--textos_secundarios') textosSecundariosColor: any;
  @HostBinding('style.--texto_presentacion_modelo_uno') textoPresentacionModeloUno: any;
  @HostBinding('style.--texto_presentacion_modelo_dos') textoPresentacionModeloDos: any;

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

  constructor(){
    this.getDataUser();
  }

  getDataUser(){
    this.principalColor = this.dataSelectContructor.colorPrincipal;
    this.textoColor = this.dataSelectContructor.textoColor;
    this.secundariosColor = this.dataSelectContructor.secundariosColor;
    this.textosSecundariosColor = this.dataSelectContructor.textosSecundariosColor;
  }



}
