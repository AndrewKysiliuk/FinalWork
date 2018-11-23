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
  prepare: Prepare[] = [];

  types: string[] = ['гр', 'кг', 'мл', 'л', 'ч. лож', 'ст. лож.', 'шт'];
  category: string[] = ['Алкогольні напої', 'Без-алкогольні напої', 'Супи', 'Салати',
    'М\'ясні страви', 'Вегетеріанські страви', 'Піца', 'Суші', 'Десерти'];
  description;
  itemCategory;

  constructor() {
    this.prepare.push(new Prepare());
    this.component.push(new Components());
  }

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
          this.prepare.push(new Prepare());
        break;
      }
      case 'component' : {
          this.component.push(new Components());
          break;
        }
      }
  }
  delTemplate(type: string, index: number) {
    switch (type) {
      case 'prepare': {
        this.prepare.splice(index, 1);
        break;
      }
      case 'component' : {
        this.component.splice(index, 1);
        break;
      }
    }
  }

  ngOnInit() {}

}

export class Components {
  constructor(public name: string = '',
              public count: number = null,
              public type: string = '') {}
}

export class Prepare {
  constructor(public url: string = '',
              public text: string = '') {}
}
