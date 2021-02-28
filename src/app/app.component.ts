import { Component, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterContentInit {
  loader: boolean = true;

  ngAfterContentInit() {
    setTimeout(() => {
      this.loader = false;
    }, 100);
  }

  public onActivate() {
    window.scrollTo(0, 0);
  }
}