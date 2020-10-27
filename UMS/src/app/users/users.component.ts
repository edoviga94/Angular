import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';



@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit{

    title = 'Users';

    users = [];

    constructor(private service: UserService) {
    }


    ngOnInit(): void {
        this.users = this.service.getUsers();
    }
}
