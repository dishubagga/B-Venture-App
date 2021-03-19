import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private URL = "http://developia-backend-test.eu-central-1.elasticbeanstalk.com:80/api/386ea085-1b88-40b5-9db5-fe2959eb73d3/jobs";
  private headers = new HttpHeaders()
    .append('Authorization', 'Bearer ' + localStorage.getItem('access_token'));

  constructor(private httpClient: HttpClient) { }

  public getData(): Observable<any> {
    return this.httpClient.get(this.URL, { headers: this.headers }).pipe(catchError(this._handleError));
  }

  private _handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
