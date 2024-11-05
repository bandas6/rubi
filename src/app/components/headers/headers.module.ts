import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ModeloGeneralComponent } from './modelo-general/modelo-general.component';


@NgModule({
  declarations: [ModeloGeneralComponent],
  exports: [ModeloGeneralComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class HeadersModule { }
