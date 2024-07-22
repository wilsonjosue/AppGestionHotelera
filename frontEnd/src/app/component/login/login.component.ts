// src/app/components/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [CommonModule, FormsModule, RouterModule, RouterOutlet],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      response => {
          this.router.navigate(['/home']);
          console.log('Login exitoso', response);
        }
    );
  }
  rooms(): void {
    this.router.navigate(['/rooms']); 
  }
  home(): void {
    this.router.navigate(['/home']); 
  }
  descripcion(): void {
    this.router.navigate(['/rooms-single']); 
  }
  register(): void {
    this.router.navigate(['/register']); 
  }
}