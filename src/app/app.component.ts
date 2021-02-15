import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  
  loader: boolean = true;

  ngAfterViewInit() {
    setTimeout(() => {
      this.loader = false;
    }, 100);
  }

  public onActivate($event) {
    window.scrollTo(0, 0);
  }
  
}