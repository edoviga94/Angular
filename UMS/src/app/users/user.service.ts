import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

    constructor() {}

    getUsers() {
        return [
            {
                name: 'Edoardo',
                lastname: 'Viganò',
                fiscalcode: 'PJETVZ66T31I735Y',
                email: 'prova@me.com',
                telefono: '633-44-99079',
                provincia: 'MB',
                age: 42


            }, {
                name: 'Edoardo2',
                lastname: 'Viganò2',
                fiscalcode: 'PJETVZ66T31I735Y',
                email: 'prova@me.com',
                telefono: '633-44-99079',
                provincia: 'MB',
                age: 35



            }, {
                name: 'Edoardo3',
                lastname: 'Viganò3',
                fiscalcode: 'PJETVZ66T31I735Y',
                email: 'prova@me.com',
                telefono: '633-44-99079',
                provincia: 'MB',
                age: 17



            }

        ];
    }
}
