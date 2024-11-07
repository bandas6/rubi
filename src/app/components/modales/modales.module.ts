import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgLabelTemplateDirective, NgOptionTemplateDirective, NgSelectComponent, NgSelectModule } from '@ng-select/ng-select';
import { EcommerceHeaderModule } from '../headers/ecommerce/ecommerce-header.module';
import { ModalGeneralUnoComponent } from './modal-general-uno/modal-general-uno.component';



@NgModule({
  declarations: [ModalGeneralUnoComponent],
  exports: [ModalGeneralUnoComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgLabelTemplateDirective, 
    NgOptionTemplateDirective, 
    NgSelectComponent,
    NgSelectModule, 
    FormsModule,
    EcommerceHeaderModule
  ]
})
export class ModalesModule { }
