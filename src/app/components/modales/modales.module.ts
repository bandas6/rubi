import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ModalGeneralUnoComponent } from './modal-general-uno/modal-general-uno.component';


@NgModule({
  declarations: [ModalGeneralUnoComponent],
  exports: [ModalGeneralUnoComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgSelectModule, 
    FormsModule,
    NgbPopoverModule
  ]
})
export class ModalesModule { }
