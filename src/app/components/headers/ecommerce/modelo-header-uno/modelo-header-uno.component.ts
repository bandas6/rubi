import { Component, OnInit } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-modelo-uno',
  standalone: false,
  templateUrl: './modelo-header-uno.component.html',
  styleUrl: './modelo-header-uno.component.scss'
})
export class ModeloHeaderUnoComponent implements OnInit {
  
  faUserCircle = faUserCircle; // Importando el icono de usuario de Font Awesome

  mostrarPover:boolean = true;
  
  titulo:string = "";

  dataSelectContructor: any = {
    pagina: {
      numeroHeader: 1,
      numeroBody: 1,
      anuciosHeader: false,
      headerTituloTexto: true
    },
    titulo: "Shopping"
  };

  ngOnInit(): void {

    this.titulo = this.dataSelectContructor.titulo;

  }


}
