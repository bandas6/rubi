import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaUnoComponent } from './categoria-uno.component';
import { VerProductoComponent } from './components/ver-producto/ver-producto.component';
import { VerProductoCategoriaComponent } from './ver-producto-categoria/ver-producto-categoria.component';

const routes: Routes = [
  {
    path: 'ver-producto-categoria',
    component: VerProductoCategoriaComponent
  }, 
  {
    path: 'ver-producto',
    component: VerProductoComponent
  },
  {
    path: '',
    component: CategoriaUnoComponent
  },
  {
    path: '**',
    redirectTo: '', // Redirect to default route if not found
    pathMatch: 'full' // Ensure that the redirect is applied even if the URL has a trailing slash or a query parameter
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaUnoRoutingModule { }
