import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  username = '';
  password = '';
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSave(): void {
    console.log(this.username + this.password);
    this.authService.login(this.username, this.password).subscribe((data)=>{
      console.log(data);
    });
  }

}
