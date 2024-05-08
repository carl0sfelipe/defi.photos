import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'https://dev230375.service-now.com/api/x_786590_basic_u_0/user/login';
  private registerUrl = 'https://dev230375.service-now.com/api/x_786590_basic_u_0/user/register'; // Adicione a URL correta aqui

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('admin:admin')
    });
    const body = JSON.stringify({ email: email, password: password });
    return this.http.post(this.loginUrl, body, { headers });
  }

  register(name: string, email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    const body = JSON.stringify({ name: name, email: email, password: password });
    return this.http.post(this.registerUrl, body, { headers });
  }
}
