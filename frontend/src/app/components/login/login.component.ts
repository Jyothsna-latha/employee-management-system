import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email = '';
  password = '';
  constructor( private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe(() => {
      this.router.navigate(['/datatable']);
    }); 
  }
  signUp() {
    this.router.navigate(['/register']);
  }
}
