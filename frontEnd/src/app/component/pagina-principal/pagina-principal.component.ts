import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pagina-principal',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet],
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
    this.router.navigate(['/paginaPrincipal']); 
  }
  descripcion(): void {
    this.router.navigate(['/roomsSingle']); 
  }
}
