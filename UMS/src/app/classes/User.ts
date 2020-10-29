import { UserInterface } from '../interface/user';

export class User implements UserInterface {
    id;
    name;
    lastname;
    fiscalcode;
    email;
    telefono;
    provincia;
    age;


    constructor() {
        this.id = 0;
        this.name = '';
        this.lastname  = '';
        this.fiscalcode  = '';
        this.email  = '';
        this.telefono  = '';
        this.provincia  = '';
        this.age = 18;
    }
}