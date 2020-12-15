import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class referenciasService{
    constructor(public BD:AngularFireDatabase){

    }
    public getReferencias(){
        return this.BD.list('/referencias/');
    }
    public getReferencia(idreferencia:any){
        return this.BD.object('/referencias/' + idreferencia);
    }
    public createReferencia(referencia:any){
        return this.BD.database.ref('/referencias/' + referencia.idreferencia).set(referencia);
    }
    public editReferencia(referencia:any){
        return this.BD.database.ref('/referencias/' + referencia.idreferencia).set(referencia);
    }
    public deleteReferencia(referencia:any){
        return this.BD.database.ref('/referencias/' + referencia.idreferencia).remove();
    }
}