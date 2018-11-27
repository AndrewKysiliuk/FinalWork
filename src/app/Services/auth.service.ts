import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  localStorageId = 'angularFinalProject';

  constructor() {
  }

  create(key: string) {
    localStorage.setItem(this.localStorageId, JSON.stringify({'key': key}));
  }

  getKey() {
    const ls = localStorage.getItem(this.localStorageId);
    const data = JSON.parse(ls);
    return data.key;
  }

  getStatus(): boolean {
    const ls = localStorage.getItem(this.localStorageId);
    return ls ? true : false;
  }

  remove() {
    localStorage.removeItem(this.localStorageId);
  }
}
