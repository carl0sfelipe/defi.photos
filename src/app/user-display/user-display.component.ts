import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-display',
  template: `
    <div *ngFor="let user of users">
      {{ user.name }} <!-- Assumindo que a resposta tem um campo 'name' -->
    </div>
  `
})
export class UserDisplayComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data.result; // Ajuste conforme a estrutura da resposta
      },
      error: (error) => console.error('There was an error!', error)
    });
  }
}
