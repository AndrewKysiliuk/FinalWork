import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClientService} from '../../Services/HttpClientService';
import {Recipe} from '../../classes/recipe';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.less']
})
export class ItemListComponent implements OnInit {

  category;
  recipe: Recipe[] = [];
  constructor(private ar: ActivatedRoute,
              private router: Router,
              private http: HttpClientService) { }


  createNew() {
    this.router.navigate([`home/${this.category}/create`]);
  }

  ngOnInit() {
    this.ar.params.subscribe(data => {
      this.category = data.category;
      console.log(data);
      this.http.httpGet(this.category).subscribe(
        (response: Recipe[]) => this.recipe = response,
        // error => {
        //   console.log(error);
        //   this.router.navigate(['404']);
        // }
      );
    });
  }

}
