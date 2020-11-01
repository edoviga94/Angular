import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {OuterSubscriber} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  // tslint:disable-next-line:no-output-on-prefix

  showMenu = false;
  @Output() onNewUser = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  newUser() {
    this.onNewUser.emit();
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

}
