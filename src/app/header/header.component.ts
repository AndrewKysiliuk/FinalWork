import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less', '../share/share.component.less']
})
export class HeaderComponent implements OnInit {

  currentDate: any;

  constructor() { }

  editProfile() {

  }

  ngOnInit(): void {
    setInterval(() => { this.currentDate = Date.now(); }, 1000);
  }
}
