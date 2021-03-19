import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  username = '';
  password = '';
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/dashboard']);
    }
  }

  onSave(): void {
    console.log(this.username + this.password);
    this.authService.login(this.username, this.password).subscribe((response) => {
      console.log(response.access_token);
    }, err => {
      if (err.status == 401) {
        alert('The user is not authorized');
      }
    });
    this.username = '';
    this.password = '';
  }

}
