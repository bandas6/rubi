import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ModalesModule } from '../modales/modales.module';
import { ModeloGeneralComponent } from './modelo-general/modelo-general.component';

@NgModule({
  declarations: [ModeloGeneralComponent],
  exports: [ModeloGeneralComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    ModalesModule
  ]
})
export class HeadersModule { }
