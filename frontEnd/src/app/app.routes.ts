//src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { PaginaPrincipalComponent } from './component/pagina-principal/pagina-principal.component';
import { RoomsComponent } from './component/rooms/rooms.component';
import { RoomsSingleComponent } from './component/rooms-single/rooms-single.component';
<<<<<<< HEAD
import { GuestComponent } from './component/guest/guest.component';
import { RegisterComponent } from './component/register/register.component';
import { LogoutComponent } from './component/logout/logout.component';
=======
import { ImprimirComponent } from './component/imprimir/imprimir.component';
>>>>>>> a5a3adcf47818bd4a80ec47966f3818d51039d65

export const routes: Routes = [
  
  { path: 'home', component: PaginaPrincipalComponent },
  { path: 'listar-guest', component: GuestComponent },
  { path: 'rooms', component: RoomsComponent},
<<<<<<< HEAD
  { path:'rooms-single',component: RoomsSingleComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '', component: LoginComponent },
=======
  { path:'roomsSingle',component: RoomsSingleComponent},
  { path: 'imprimir', component: ImprimirComponent },
>>>>>>> a5a3adcf47818bd4a80ec47966f3818d51039d65
  { path: '**', redirectTo: '' }
];