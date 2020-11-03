import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {User} from '../classes/User';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css'],
})
export class UserDataComponent implements OnInit {
  public user: User;
  public title = 'User Detail';
  constructor(private route: ActivatedRoute, 
              private service: UserService,
              private router: Router) {}

  ngOnInit(): void {
    this.user = new User();
    this.route.params.subscribe((p) => {
      this.user = this.service.getUser(+p.id);
    });
  }

  backToUser() {
    this.router.navigate(['users']);
  }
}
