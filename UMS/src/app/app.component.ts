import { Component } from '@angular/core';
import { User } from './classes/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UMS';
  userSelected: User = new User();
  showForm = false;

  updateUser(user: User) {
    this.userSelected = user;
    this.showForm = true;
  }
}
