import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Hally Santos';
  birthdate = new Date(1990, 10, 10);
  price = 12355.45;
  change = 0.45213;
}
