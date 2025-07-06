import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:7000/api/employees';

  constructor(private http: HttpClient) {}
  login(email: string, password: string) {
    console.log('auth service fun');

    return this.http
      .post<{ token: string; employee: any }>(`${this.apiUrl}/login`, {
        email,
        password,
      })
      .pipe(
        tap((res) => {
          localStorage.setItem('token', res.token);
          localStorage.setItem('user', JSON.stringify(res.employee)); // Save logged-in user
        })
      );
  }

  getToken() {
    return localStorage.getItem('token');
  }
  getLoggedInUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}
