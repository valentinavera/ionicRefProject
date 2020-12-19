import { Injectable } from "@angular/core";
import { AngularFireAuth } from 'angularfire2/auth';
import { usuario } from '../app/models/usuarioModel';

@Injectable()
export class sessionServices{
    constructor(public fbAuth: AngularFireAuth){

    }

    public signInUser( infoUser: usuario){
        return this.fbAuth.auth.signInWithEmailAndPassword(infoUser.email, infoUser.password);
    }

    public createUser(infoUser:usuario){
        return this.fbAuth.auth.createUserWithEmailAndPassword(infoUser.email, infoUser.password);
    }
}