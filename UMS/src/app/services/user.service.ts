import { UserInterface } from './../interface/user';
import { Injectable } from '@angular/core';
import { User } from '../classes/User';

@Injectable()
export class UserService {

    users: User[] = [
        {
            id: 1,
            name: 'Edoardo',
            lastname: 'Viganò',
            fiscalcode: 'PJETVZ66T31I735Y',
            email: 'prova@me.com',
            telefono: '633-44-99079',
            provincia: 'MB',
            age: 42


        }, {
            id: 2,
            name: 'Edoardo2',
            lastname: 'Viganò2',
            fiscalcode: 'PJETVZ66T31I735Y',
            email: 'prova@me.com',
            telefono: '633-44-99079',
            provincia: 'MB',
            age: 35



        }, {
            id: 3,
            name: 'Edoardo3',
            lastname: 'Viganò3',
            fiscalcode: 'PJETVZ66T31I735Y',
            email: 'prova@me.com',
            telefono: '633-44-99079',
            provincia: 'MB',
            age: 17



        }

    ];

    constructor() {}

    getUsers() {
        return this.users;
    }

    deleteUser(user) {

        const index = this.users.indexOf(user);
        if (index >= 0) {
            this.users.splice(index, 1);
        }
    }

    updateUser(user: UserInterface) {
        const idx = this.users.findIndex((v) => v.id === user.id);

        alert(idx);
        if(idx !== -1) {
            this.users[idx] = user;
        }
    }

    createUser(user: UserInterface) {

        this.users.splice(0, 0, user);
    }
}
