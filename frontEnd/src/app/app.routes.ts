import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { PaginaPrincipalComponent } from './component/pagina-principal/pagina-principal.component';
import { RoomsComponent } from './component/rooms/rooms.component';
import { RoomsSingleComponent } from './component/rooms-single/rooms-single.component';
import { ImprimirComponent } from './component/imprimir/imprimir.component';

export const routes: Routes = [
  
  { path: 'paginaPrincipal', component: PaginaPrincipalComponent },
  { path: '', component: LoginComponent },
  { path: 'rooms', component: RoomsComponent},
  { path:'roomsSingle',component: RoomsSingleComponent},
  { path: 'imprimir', component: ImprimirComponent },
  { path: '**', redirectTo: '' }
];