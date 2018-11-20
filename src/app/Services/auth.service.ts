import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  update(status: boolean) {
    localStorage.setItem('userIn', JSON.stringify({value: status}));
  }

  getStatus(): Observable<boolean> {
    const ls = localStorage.getItem('userIn');
    let status = false;
    if (ls) {
      if (JSON.parse(ls).value) {
        status = true;
      }
    } else {
      localStorage.setItem('userIn', JSON.stringify({value: status}));
    }

    return of(status);
  }
}
