import { Component } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modelo-general',
  standalone: false,
  templateUrl: './modelo-general.component.html',
  styleUrl: './modelo-general.component.scss'
})
export class ModeloGeneralComponent {

  faUserCircle = faUserCircle; // Importando el icono de usuario de Font Awesome

  mostrarPover:boolean = true;

}
