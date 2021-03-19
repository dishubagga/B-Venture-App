import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = "http://ec2-18-195-130-123.eu-central-1.compute.amazonaws.com:8080/auth/realms/mixit/protocol/openid-connect/token";
  private headers = new HttpHeaders()
    .append('Content-Type', 'application/x-www-form-urlencoded')
    .append('Authorization', 'Basic bWl4aXQtd2ViYXBwLTAxOmY5YzY2NGMwLTlhNjEtNDA0OS05NjQ3LTRkZWQzMjZiMjBmZg==');
  public isLoggedIn$: BehaviorSubject<boolean>;

  constructor(private httpClient: HttpClient, private router: Router) {
    this.isLoggedIn$ = new BehaviorSubject(this.isLoggedIn);
  }

  public login(username: string, password: string): Observable<any> {
    let body = 'grant_type=' + 'password' + '&username=' + username + '&password=' + password;
    return this.httpClient.post(this.URL, body, { headers: this.headers }).pipe(
      map((response) => {
        localStorage.setItem('access_token', response['access_token']);
        this.isLoggedIn$.next(true);
        this.router.navigate(['/dashboard']);
        return response;
      })
    );
  }

  get isLoggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }

  public logout(): void {
    this.isLoggedIn$.next(false);
    localStorage.removeItem('access_token');
  }




}

