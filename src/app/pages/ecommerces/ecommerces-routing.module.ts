import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcommercesComponent } from './ecommerces.component';

const routes: Routes = [
  {
    path: '',
    component: EcommercesComponent,
    children: [
      { path: 'modelo-uno', loadChildren: () => import('./modelo-uno/modelo-uno.module').then(m => m.ModeloUnoModule) },
      { path: '', redirectTo: 'modelo-uno', pathMatch: 'full' } // Redirect to default model if not found
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommercesRoutingModule { }
