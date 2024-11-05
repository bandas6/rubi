import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaDosComponent } from './categoria-dos.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriaDosComponent
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
export class CategoriaDosRoutingModule { }
