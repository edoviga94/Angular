import { UserService } from './../services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from '../classes/User';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  private userCopy: User;
  // tslint:disable-next-line:variable-name
  private _user: User;

  @Input() set user(user: User) {
    this._user = user;
    this.userCopy = Object.assign({}, user);
  }

  // tslint:disable-next-line:typedef
  get user() {
    return this._user;
  }

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = new User();
    this.route.params.subscribe(
      (params) => {
        this.user = this.userService.getUsers(params.id);
      }
    );
  }

  // tslint:disable-next-line:typedef
  saveUser() {
    if (this.user.id > 0) {
      this.userService.updateUser(this.user);
    } else {
      this.userService.createUser(this.user);
    }
  }

  // tslint:disable-next-line:typedef
  resetForm(form) {
    if (this.user.id === 0) {
      this.user = new User();
    } else {
      this.user = this.userCopy;
    }
  }
}
