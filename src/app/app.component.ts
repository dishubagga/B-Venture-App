import { Component, OnInit } from '@angular/core';
import { AuthService } from './components/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BVentureApp';
  loggedIn: boolean;
  constructor(public authService: AuthService) { }

  ngOnInit(): void {

    this.authService.isLoggedIn$.subscribe((data) => {
      this.loggedIn = data;
    })
  }

  logout(): void {
    this.authService.logout();
  }

}
