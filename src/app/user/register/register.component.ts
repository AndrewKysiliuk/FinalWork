import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less', '../authorization/authorization.component.less']
})
export class RegisterComponent implements OnInit {

  passPattern = '^(?=.*\\d)(?=.*[a-z])((?=.*[A-Z])|(?=.*\\W+))[0-9a-zA-Z\\W]{8,}$';

  form = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.pattern(this.passPattern)]),
    name : new FormControl('', [Validators.required]),
    phone : new FormControl('', [Validators.required, Validators.pattern('[0-9]{9}')]),
  });

  get email() {
    return this.form.get('email');
  }
  get name() {
    return this.form.get('name');
  }
  get phone() {
    return this.form.get('phone');
  }
  get password() {
    return this.form.get('password');
  }

  getErrorMessage(type: string) {
    switch (type) {
      case 'name': {
        return this.name.hasError('required') ? 'Поле Ім\'я обов\'язкове' : '';
        break;
      }
      case 'mail': {
        return this.email.hasError('required') ? 'Поле Email обов\'язкове' :
          this.email.hasError('email') ? 'Неправильно введений Email' :
            '';
        break;
      }
      case 'pass': {
        return this.password.hasError('required') ? 'Поле пароль обов\'язкове' :
          this.password.hasError('pattern') ? 'Пароль має складатися з мінімум 8 символів, містити принаймні ' +
            '1 маленьку букву, 1 число та 1 велику букву або спец. символ (!@#$%...)' : '';
        break;
      }
      case 'phone': {
        return this.phone.hasError('required') ? 'Поле номер телефону обов\'язкове' :
          this.phone.hasError('pattern') ? 'Неправильно введений номер телефону' :
            '';
        break;
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
