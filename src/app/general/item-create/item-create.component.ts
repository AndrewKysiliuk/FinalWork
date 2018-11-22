import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.less', '../../share/share.component.less']
})

export class ItemCreateComponent implements OnInit {

  title = new FormControl('', [Validators.required]);

  component: Components[] = [];
  componentArr: boolean[] = [];

  prepare: Prepare[] = [];
  cookArr: boolean[] = [];

  types: string[] = ['гр', 'кг', 'мл', 'л', 'ч. лож', 'ст. лож.', 'шт'];
  category: string[] = ['Алкогольні напої', 'Без-алкогольні напої', 'Супи', 'Салати',
    'М\'ясні страви', 'Вегетеріанські страви', 'Піца', 'Суші', 'Десерти'];

  itemCategory;
  description;

  constructor() { }

  getErrorMessage(message: string) {
    switch (message) {
      case 'select': {
        return this.title.hasError('required') ? 'Поле вибору неможе бути порожнім' : '';
        break;
      }
      case 'title': {
        return this.title.hasError('required') ? 'Поле назви неможе бути порожнім' : '';
        break;
      }
      case 'count': {
        return this.title.hasError('required') ? 'Поле кількості неможе бути порожнім' : '';
        break;
      }
    }
    return this.title.hasError('required') ? 'Поле назви неможе бути порожнім' : '';
  }

  addTemplate(type: string) {
    switch (type) {
      case 'prepare': {
        for (let i = 0; i < this.cookArr.length; i++) {
          if (!this.cookArr[i]) {
            this.cookArr[i] = true;
            break;
          }
        }
        break;
      }
      case
        'component'
      :
        {
          for (let i = 0; i < this.componentArr.length; i++) {
            if (!this.componentArr[i]) {
              this.componentArr[i] = true;
              break;
            }
          }
          break;
        }
      }
    }

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.component.push(new Components());
      this.prepare.push(new Prepare());
      this.componentArr.push(false);
      this.cookArr.push(false);
    }
    this.componentArr[0] = true;
    this.cookArr[0] = true;
  }

}

class Components {
  constructor(public name: string = '',
              public count: number = null,
              public type: string = '') {}

}

class Prepare {
  constructor(public url: string = '',
              public text: string = '') {}
}
