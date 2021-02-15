import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor() { }

  loader: boolean = true;

  ngOnInit(): void {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.loader = false;
    }, 100);
  }

}