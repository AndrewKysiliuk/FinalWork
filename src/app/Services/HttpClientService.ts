import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()

export class HttpClientService {

  constructor(private http: HttpClient) {
  }

  private httpUrl = 'http://localhost:3000/home';

  httpGet(key: string, category: string = '', id: number = null): Observable<{}> {
    if (category) {
      if (id) {
        return this.http.get<{}>(`${this.httpUrl}/${key}/${category}/${id}`);
      } else {
        return this.http.get<{}[]>(`${this.httpUrl}/${key}/${category}`);
      }
    } else {
      return this.http.get<{}[]>(`${this.httpUrl}/${key}`);
    }
  }

  newRecord(val: {}): Observable<{}> {
      return this.http.post(this.httpUrl, val);
  }

  delRecord(id: number): Observable<{}> {
    const delUrl = `${this.httpUrl}/${id}`;
    return this.http.delete(delUrl);
  }
}
