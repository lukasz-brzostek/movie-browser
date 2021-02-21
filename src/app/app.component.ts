import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  loader: boolean = true;

  ngAfterViewInit() {
    this.loader = false;
  }

  public onActivate() {
    window.scrollTo(0, 0);
  }
}
