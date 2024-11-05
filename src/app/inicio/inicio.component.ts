import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeadersModule } from '../components/headers/headers.module';

interface Box {
  left: number;    // Posición horizontal
  delay: number;   // Retardo de animación
}

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [HeadersModule, CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})

export class InicioComponent {
  
  boxes: Box[] = [];

  ngOnInit(): void {
    // Genera cuadros en intervalos regulares
    setInterval(() => this.createBox(), 500); // Crear un cuadro cada 500ms
  }


  createBox(): void {
    const containerWidth = document.querySelector('.container')?.clientWidth || 0;

    // Crear un nuevo cuadro con posición y retardo aleatorios
    const box: Box = {
      left: Math.floor(Math.random() * containerWidth), // Posición aleatoria en el contenedor
      delay: parseFloat((Math.random() * 2).toFixed(10)) // Retardo aleatorio entre 0 y 2 segundos
    };

    // Añadir el cuadro a la lista de cuadros
    this.boxes.push(box);

    // Eliminar el cuadro después de 2 segundos para evitar acumulación
    setTimeout(() => {
      this.boxes.shift();
    }, 4000);
  }
}
