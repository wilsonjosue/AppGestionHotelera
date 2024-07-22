// src/app/components/register/pagina-principal.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-pagina-principal',
  standalone: true,
  imports: [CommonModule, FormsModule],
=======
import { RouterModule,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pagina-principal',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet],
>>>>>>> a5a3adcf47818bd4a80ec47966f3818d51039d65
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.css'
})
export class PaginaPrincipalComponent {
  constructor(private router: Router) {}
  rooms(): void {
    this.router.navigate(['/rooms']); 
  }
  login(): void {
    this.router.navigate(['/login']); 
  }
  home(): void {
    this.router.navigate(['/home']); 
  }
  descripcion(): void {
    this.router.navigate(['/rooms-single']); 
  }
  guest(): void {
    this.router.navigate(['/listar-guest']); 
  }
  register(): void {
    this.router.navigate(['/register']); 
  }
  logout(): void {
    this.router.navigate(['/logout']); 
  }
}
