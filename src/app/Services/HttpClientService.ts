import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {AuthService} from './auth.service';
import {catchError} from 'rxjs/operators';

@Injectable()

export class HttpClientService {

  private key = '';

  constructor(private http: HttpClient,
              private authService: AuthService) {
   this.key = this.authService.getKey();
  }

  private httpUrl = 'http://localhost:3000/home';

  httpGet(category: string = '', id: number = null): Observable<{}> {
    if (category) {
      if (id) {
        return this.http.get<{}>(`${this.httpUrl}/${this.key}/${category}/${id}`)
          .pipe(catchError(err => this.errorHandler(err)));
      } else {
        return this.http.get<{}[]>(`${this.httpUrl}/${this.key}/${category}`)
          .pipe(catchError(err => this.errorHandler(err)));
      }
    } else {
      return this.http.get<{}[]>(`${this.httpUrl}/${this.key}`)
        .pipe(catchError(err => this.errorHandler(err)));
    }
  }

  newRecord(data, category: string): Observable<{}> {
      return this.http.post(`${this.httpUrl}/${this.key}/${category}`, data)
        .pipe(catchError(err => this.errorHandler(err)));
  }

  delRecord(id: number): Observable<{}> {
    const delUrl = `${this.httpUrl}/${id}`;
    return this.http.delete(delUrl)
      .pipe(catchError(err => this.errorHandler(err)));;
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.error || 'Server error');
  }
}
