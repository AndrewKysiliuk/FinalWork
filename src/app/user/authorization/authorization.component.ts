import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { AuthRegService } from '../../Services/auth-reg.service';

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

  passError = false;
  logError = false;

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

  constructor(private router: Router,
              private service: AuthRegService) { }

  authorization() {
    this.service .authorization({'email': this.email.value, 'password': this.pass.value}).subscribe(
      res => {
        this.router.navigate([`home`]);
        },
      err => {
        if (err === 'Invalid password') {
          this.passError = true;
          setTimeout(() => {
              this.pass.setValue('');
              this.passError = false;
            }
            , 2000);
        } else if ( err === 'User not found') {
          this.logError = true;
          setTimeout(() => {
            this.logError = false;
            this.email.setValue('');
          }, 2000);
        }
      }
      );
  }

  ngOnInit() {
  }

}
