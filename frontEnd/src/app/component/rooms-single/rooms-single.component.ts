import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-rooms-single',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './rooms-single.component.html',
  styleUrl: './rooms-single.component.css'
})
export class RoomsSingleComponent {
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
