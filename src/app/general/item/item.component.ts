import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../classes/recipe';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.less']
})

export class ItemComponent implements OnInit {
  @Input() item: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
