import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.less']
})
export class GeneralComponent implements OnInit {
  category: string [] = ['Алкогольні напої', 'Безалкогольні напої', 'Салати', 'Перші страви', 'Піца', 'Суші', ];

  addCategory(name: string) {
    this.category.push(name);
  }


  ngOnInit() {
  }

}
