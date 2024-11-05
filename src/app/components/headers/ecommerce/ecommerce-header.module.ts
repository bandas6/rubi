import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModeloHeaderUnoComponent } from './modelo-header-uno/modelo-header-uno.component';



@NgModule({
  declarations: [ModeloHeaderUnoComponent],
  exports: [ModeloHeaderUnoComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class EcommerceHeaderModule { }
