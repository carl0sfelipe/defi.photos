// register.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  template: `
    <h2>Register</h2>
    <form #registerForm="ngForm" (ngSubmit)="onSubmit(registerForm)">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" ngModel required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" ngModel required>
      </div>
      <button type="submit" [disabled]="!registerForm.valid">Register</button>
    </form>
    <p *ngIf="response">{{ response }}</p>
  `,
  styles: []
})
export class RegisterComponent {
  response: string | null = null;

  constructor(private authService: AuthService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.authService.registerUser(form.value.name, form.value.email).subscribe({
        next: (data) => this.response = 'Registration successful',
        error: (error) => this.response = 'Registration failed'
      });
    }
  }
}
