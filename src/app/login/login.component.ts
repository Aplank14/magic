import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.authService.isLoggedIn = true;
    this.authService.isAdmin = true;
    if ( false ) {
      this.authService.isAdmin = true;
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/hours']);
    }
  }

}
