import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModeloUnoComponent } from './modelo-uno.component';

const routes: Routes = [
  {
    path: '',
    component: ModeloUnoComponent
  },
  {
    path: 'categoria-uno',
    loadChildren: () => import('./categoria-uno/categoria-uno.module').then(m => m.CategoriaUnoModule)
  },
  {
    path: 'categoria-dos',
    loadChildren: () => import('./categoria-dos/categoria-dos.module').then(m => m.CategoriaDosModule)
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModeloUnoRoutingModule { }
