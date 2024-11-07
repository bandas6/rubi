import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChildren } from '@angular/core';
import { SliderProductosComponent } from "../../../../../../components/sliders/slider-productos/slider-productos.component";

@Component({
  selector: 'app-ver-producto',
  standalone: true,
  imports: [SliderProductosComponent, CommonModule],
  templateUrl: './ver-producto.component.html',
  styleUrl: './ver-producto.component.scss'
})
export class VerProductoComponent {

  imagen!: string;

  @ViewChildren("cantidad") cantidad!: ElementRef;

  producto: any = {
    id: 1,
    nombre: 'Producto 1',
    precio: 100,
    stock: 10,
    descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi officia ut quia voluptatum, incidunt ipsum quas beatae obcaecati culpa quo doloremque id veniam harum? Vero, numquam cumque! Corrupti, exercitationem porro?',
    categoria: '200g',
    marca: 'Marca 1',
    tamanio: '18cm',
    diametro: '9mm',
    disponible: true,
    oferta: true,
    imagen: 'assets/img/producto1.jpg'
  }

  imagenSeleccionada(imagen: string) {

    const imagenElemento = document.querySelector('.imagen_slider img');
    if (imagenElemento) {
      imagenElemento.classList.add('cambio'); // Agrega la clase para activar la transición

      setTimeout(() => {
        this.imagen = imagen; // Cambia la imagen después de aplicar la opacidad
        imagenElemento.classList.remove('cambio'); // Quita la clase para volver a mostrar la imagen
      }, 300); // Debe coincidir con el tiempo de la transición
    }

  }

  comprarProducto() {
    console.log('cantidad ',this.cantidad.nativeElement)
   }

}
