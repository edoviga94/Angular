import { UserService } from '../services/user.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../classes/User';
import {Router} from '@angular/router';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input('user-data') user: User;
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  @Output() onSelectUser = new EventEmitter();

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit(): void {
  }


  // tslint:disable-next-line: typedef
  deleteUser() {
    this.userDeleted.emit(this.user);
  }

  updateUser() {
    
    this.route.navigate(['users', this.user.id, 'edit']);
    this.onSelectUser.emit(this.user);
  }

  showUserDetail() {
    this.route.navigate(['users', this.user.id]);
  }

}
