import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.less', '../../share/share.component.less']
})

export class ItemCreateComponent implements OnInit {

  title = new FormControl('', [Validators.required]);
  array: Components[] = [];
  templateArr: boolean[] = [];
  types: string[] = ['гр', 'кг', 'мл', 'л', 'ч. лож', 'ст. лож.', 'шт'];
  category: string[] = ['Алкогольні напої', 'Без-алкогольні напої', 'Супи', 'Салати',
    'М\'ясні страви', 'Вегетеріанські страви', 'Піца', 'Суші', 'Десерти'];
  itemCategory;

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

  addTemplate() {
    for (let i = 0; i < this.templateArr.length; i++) {
      if (!this.templateArr[i]) {
        this.templateArr[i] = true;
        break;
      }
    }
  }

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.array.push(new Components());
      this.templateArr.push(false);
    }
    this.templateArr[0] = true;
  }

}

class Components {
  constructor(public name: string = '',
              public count: number = null,
              public type: string = '') {}

}
