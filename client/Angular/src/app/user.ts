import { Content } from '@angular/compiler/src/render3/r3_ast';

export class User{
    id:number;
    content:string;

    constructor(
        username : string,
        firstname : string,
        lastname : string,
        age : number,
        password : string,
        confirmppassword: string,
        email : string,
        confirmemail:string,
        entermobilenumber:number,
        gender:string,
        private _id: number, public message: string
        
    ){this.id = _id;
        this.content = message;}
}