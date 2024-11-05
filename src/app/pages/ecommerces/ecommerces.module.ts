import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { EcommercesRoutingModule } from './ecommerces-routing.module';


@NgModule({
  declarations: [],
  imports: [
    RouterOutlet,
    CommonModule,
    EcommercesRoutingModule
  ]
})
export class EcommercesModule { }
