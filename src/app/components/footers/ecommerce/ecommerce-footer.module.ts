import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModeloFooterUnoComponent } from './modelo-footer-uno/modelo-footer-uno.component';



@NgModule({
  declarations: [ModeloFooterUnoComponent],
  exports: [ModeloFooterUnoComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class EcommerceFooterModule { }
