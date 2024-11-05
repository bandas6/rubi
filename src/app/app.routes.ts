import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: 'inicio', 
        loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule),
    },
    { 
        path: 'pages', 
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
        //canActivate: [AuthGuard]
    },
    { 
        path: '', 
        redirectTo: '/inicio', 
        pathMatch: 'full' 
    }
];
