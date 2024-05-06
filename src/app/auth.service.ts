// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://dev230375.service-now.com/api/now/table/sys_user';
  private headers = new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + btoa('admin:C+t1f%6TfpCT')
  });

  constructor(private http: HttpClient) {}

  registerUser(name: string, email: string) {
    const requestBody = JSON.stringify({ name, email });
    return this.http.post(this.apiUrl, requestBody, { headers: this.headers });
  }
}
