import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider-busqueda',
  standalone: true,
  imports: [],
  templateUrl: './slider-productos.component.html',
  styleUrl: './slider-productos.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SliderProductosComponent {

  @Input() productos: any[] = [
    {ruta_portada:'/imagenes/presentacionEcommerceEjemplo.jpg'},
    {ruta_portada:'/imagenes/presentacionEcommerceEjemplo.jpg'},
    {ruta_portada:'/imagenes/presentacionEcommerceEjemplo.jpg'},
    {ruta_portada:'/imagenes/presentacionEcommerceEjemplo.jpg'},
    {ruta_portada:'/imagenes/presentacionEcommerceEjemplo.jpg'},
  ];

}
