import { Component } from '@angular/core';
import { SliderProductosComponent } from "../../../../../components/sliders/slider-productos/slider-productos.component";

@Component({
  selector: 'app-ver',
  standalone: true,
  imports: [SliderProductosComponent],
  templateUrl: './ver-producto-categoria.component.html',
  styleUrl: './ver-producto-categoria.component.scss'
})
export class VerProductoCategoriaComponent {

}
