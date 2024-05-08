import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onRegister(): void {
    this.authService.register(this.name, this.email, this.password).subscribe({
      next: (response) => {
        console.log('Registration successful', response);
        // Implementar redirecionamento ou exibição de mensagem de sucesso
      },
      error: (error) => {
        console.error('Registration failed', error);
      }
    });
  }
}
