import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalesModule } from '../../modales/modales.module';
import { ModeloHeaderUnoComponent } from './modelo-header-uno/modelo-header-uno.component';



@NgModule({
  declarations: [ModeloHeaderUnoComponent],
  exports: [ModeloHeaderUnoComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ModalesModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class EcommerceHeaderModule { }
