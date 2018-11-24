import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.less']
})
export class ItemComponent implements OnInit {
  @Input() item: number;

  text: string = 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n' +
    '        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n' +
    '        bred for hunting.';

  constructor() { }

  ngOnInit() {
  }

}
