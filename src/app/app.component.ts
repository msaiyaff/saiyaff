import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Saiyaff Farouk';

  private navLinks = [
    { path: 'home', label: 'Home' }
  ];

}
