import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { PaginaPrincipalComponent } from './component/pagina-principal/pagina-principal.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'paginaPrincipal', component: PaginaPrincipalComponent },
  { path: '**', redirectTo: '' }
];