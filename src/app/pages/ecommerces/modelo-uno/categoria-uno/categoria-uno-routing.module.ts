import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaUnoComponent } from './categoria-uno.component';
import { VerComponent } from './components/ver/ver.component';

const routes: Routes = [
  {
    path: 'ver',
    component: VerComponent
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
