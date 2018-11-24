import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.less']
})
export class GeneralComponent implements OnInit {
  arr: number[] = [];
  category: any [] = [
    {title: 'Алкогольні напої', value: 'alco'},
    {title: 'Безалкогольні напої', value: 'notAlco'},
    {title: 'Салати', value: 'salad'},
    {title: 'Перші страви', value: 'first'},
    {title: 'Піца', value: 'pizza'},
    {title: 'Суші', value: 'sushi'}];

  addCategory(name: string) {
    this.category.push({title: name, value: 'some'});
  }
  showCategoryItems(categ: string) {
    this.arr = [];
    for ( let i = Math.floor(Math.random() * 10); i < 10; i++) {
      this.arr.push(i);
    }
  }


  ngOnInit() {
    for ( let i = 0; i < 10; i++) {
      this.arr.push(i);
    }
  }

}
