import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  mostraPassword = false;
  log = [];

  mostra() {
    this.mostraPassword = !(this.mostraPassword);
    this.log.push(this.log.length + 1);
  }
}
