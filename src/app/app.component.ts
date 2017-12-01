import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /** Variable holds the values of routes */
  private navLinks = [
    { path: 'home', label: 'Home' }
  ];

}
