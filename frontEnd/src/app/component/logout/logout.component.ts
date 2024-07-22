// src/app/components/logout/logout.component.ts

import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  template: ''
})
export class LogoutComponent {

  constructor(private authService: AuthService, private router: Router) {
    this.authService.logout().subscribe(
      response => {
        console.log('Logout successful', response);
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Logout failed', error);
      }
    );
  }

  logout() {
    this.authService.logout();
    console.log('Logged out successfully');
    this.router.navigate(['/login']);
    // Redirige a la página de inicio de sesión o a donde sea necesario
  }
}