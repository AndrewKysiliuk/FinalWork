import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Components } from '../../classes/components';
import {Prepare} from '../../classes/prepare';
import {Recipe} from '../../classes/recipe';
import {HttpClientService} from '../../Services/HttpClientService';
import {Category} from '../general.component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.less', '../../share/share.component.less']
})

export class ItemCreateComponent implements OnInit {

  title = new FormControl('', [Validators.required]);
  select = new FormControl('', [Validators.required]);

  componentTitle: FormControl[] = [];
  componentCount: FormControl[] = [];
  componentType: FormControl[] = [];

  recipe: Recipe = new Recipe();

  types: string[] = ['гр', 'кг', 'мл', 'л', 'ч. лож', 'ст. лож.', 'шт'];
  category: Category[] = [];
  defaultImg = '../../../assets/default_img.svg';

  itemCategory;

  constructor(private http: HttpClientService,
              private router: Router,
              private ar: ActivatedRoute) {
    this.recipe.prepare.push(new Prepare());
    this.recipe.component.push(new Components());
    this.recipe.img = this.defaultImg;

    this.componentTitle.push(new FormControl('', [Validators.required]));
    this.componentCount.push(new FormControl('', [Validators.required]));
    this.componentType.push(new FormControl('', [Validators.required]));
  }

  getErrorMessage(message: string, index: number = null) {
    switch (message) {
      case 'title': {
        return this.title.hasError('required') ? 'Поле назви неможе бути порожнім' : '';
        break;
      }
      case 'titleSelect': {
        return this.select.hasError('required') ? 'Поле вибору неможе бути порожнім' : '';
        break;
      }
      case 'count': {
        return this.componentCount[index].hasError('required') ? 'Поле кількості неможе бути порожнім' : '';
        break;
      }
      case 'componentTitle': {
        return this.componentTitle[index].hasError('required') ? 'Поле назви неможе бути порожнім' : '';
        break;
      }
      case 'select': {
        return this.componentType[index].hasError('required') ? 'Поле вибору неможе бути порожнім' : '';
        break;
      }
    }
    return this.title.hasError('required') ? 'Поле назви неможе бути порожнім' : '';
  }

  addTemplate(type: string) {
    switch (type) {
      case 'prepare': {
          this.recipe.prepare.push(new Prepare());
        break;
      }
      case 'component' : {
          this.recipe.component.push(new Components());
          break;
        }
      }
  }
  delTemplate(type: string, index: number) {
    switch (type) {
      case 'prepare': {
        this.recipe.prepare.splice(index, 1);
        break;
      }
      case 'component' : {
        this.recipe.component.splice(index, 1);
        break;
      }
    }
  }

  save() {
    this.http.newRecord(this.recipe, this.itemCategory).subscribe(
      ok => this.router.navigate([`/home/${this.itemCategory}`]),
      error => console.log(error)
      );
  }

  ngOnInit() {
    this.http.httpGet().subscribe((data: Category[]) => {
      this.category = data;
      this.ar.params.subscribe(path => {
        if (!this.category.find(item => item.category === path.category)) {
          this.router.navigate(['404']);
        }
      });
    });

  }

}

