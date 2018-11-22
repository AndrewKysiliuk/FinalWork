import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.less']
})
export class AuthorizationComponent implements OnInit {

  form = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    pass : new FormControl('', [Validators.required]),
  });

  get email() {
    return this.form.get('email');
  }
  get pass() {
    return this.form.get('pass');
  }

  getErrorMessage(type: string) {
    if (type === 'mail') {
      return this.email.hasError('required') ? 'Поле Email обов\'язкове' :
        this.email.hasError('email') ? 'Неправильно введений Email' :
          '';
    } else if (type === 'pass') {
      return this.pass.hasError('required') ? 'Поле пароль обов\'язкове' : '';
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
