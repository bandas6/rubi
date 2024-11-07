import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-slider-producto',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './slider-productos.component.html',
  styleUrl: './slider-productos.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SliderProductosComponent {

  @Input() detalles: boolean = true;  
  @Input() acciones: boolean = true;  
  @Input() productos: any[] = [
    {ruta:'/imagenes/presentacionEcommerceEjemplo.jpg' , nombre: 'Textura Textura Textura', precio: 20000},
    {ruta:'/imagenes/presentacionEcommerceEjemploDos.jpg' , nombre: 'Textura', precio: 20000},
    {ruta:'/imagenes/presentacionEcommerceEjemplo.jpg' , nombre: 'Textura', precio: 20000},
    {ruta:'/imagenes/presentacionEcommerceEjemploDos.jpg' , nombre: 'Textura', precio: 20000},
    {ruta:'/imagenes/presentacionEcommerceEjemplo.jpg' , nombre: 'Textura', precio: 20000},
  ];

  @Output() imagen: EventEmitter<string> = new EventEmitter();

  faEye = faEye;

  imagenSeleccionada(ruta: string){
    this.imagen.emit(ruta);
  }

}
