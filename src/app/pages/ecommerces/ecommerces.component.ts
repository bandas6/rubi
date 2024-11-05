import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { EcommerceFooterModule } from '../../components/footers/ecommerce/ecommerce-footer.module';
import { EcommerceHeaderModule } from '../../components/headers/ecommerce/ecommerce-header.module';

@Component({
  selector: 'app-ecommerces',
  standalone: true,
  imports: [RouterOutlet, EcommerceHeaderModule, EcommerceFooterModule],
  templateUrl: './ecommerces.component.html',
  styleUrl: './ecommerces.component.scss'
})
export class EcommercesComponent implements OnInit {

  router = inject(Router);

  modeloHeaderSeleccionado!: number;
  modeloBodySeleccionado!: number;
  modeloFooterSeleccionado!: number;

  dataSelectContructor: any = {
    pagina: {
      numeroHeader: 1,
      numeroBody: 1,
      numeroFooter: 1,
    }
  };

  constructor() {
  }

  ngOnInit(): void {
    // se obtienen los datos del header y body
    const paginas = this.dataSelectContructor.pagina;

    // se llama la funcion datos seleccionados para cargar el modelo del header
    this.cambiarModeloHeader(paginas.numeroHeader);

    // se llama la funcion datos seleccionados para cargar el modelo del body
    this.cambiarModeloBody(paginas.numeroBody);
    
    // se llama la funcion datos seleccionados para cargar el modelo del footer
    this.cambiarModeloFooter(paginas.numeroFooter);
  }

  cambiarModeloBody(numModelo: number) {
    switch (numModelo) {
      case 1:
        this.router.navigate(['/pages/ecommerces/modelo-uno'])
        break;
    
      default:
        break;
    }
  }

  cambiarModeloHeader(numeroHeader: number) {
    this.modeloHeaderSeleccionado = numeroHeader;
  }

  cambiarModeloFooter(numeroFooter: number) {
    this.modeloFooterSeleccionado = numeroFooter;
  }


}
