import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL = "http://ec2-18-195-130-123.eu-central-1.compute.amazonaws.com:8080/auth/realms/mixit/protocol/openid-connect/token";
  HEADERS = {
    "content-type": "application/x-www-form-urlencoded",
    "Authorization": "Basic bWl4aXQtd2ViYXBwLTAxOmY5YzY2NGMwLTlhNjEtNDA0OS05NjQ3LTRkZWQzMjZiMjBmZg==",
  }
  headers = new HttpHeaders()
      .append('Content-Type', 'application/x-www-form-urlencoded')
      .append('Authorization', 'Basic bWl4aXQtd2ViYXBwLTAxOmY5YzY2NGMwLTlhNjEtNDA0OS05NjQ3LTRkZWQzMjZiMjBmZg==');
  
  constructor(private httpClient: HttpClient) { }
  
  
  login(username, password): Observable<any>{
    let body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    body.set('grant_type', 'password');
    return this.httpClient.post(this.URL, body, {headers: this.headers});
  }

}
