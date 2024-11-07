import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-uno',
  standalone: true,
  imports: [],
  templateUrl: './categoria-uno.component.html',
  styleUrl: './categoria-uno.component.scss'
})
export class CategoriaUnoComponent implements OnInit {
 
  router = inject(Router);

  ngOnInit(): void {
  }

  verProducto(){
    this.router.navigate(['pages/ecommerces/modelo-uno/categoria-uno/ver-producto-categoria']);
  }

}
