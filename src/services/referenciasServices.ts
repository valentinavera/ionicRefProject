import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class referenciasService{
    constructor(public BD:AngularFireDatabase){

    }
    public getReferencias(){
        return this.BD.list('/referencias/');
    }
    public getReferencia(id: any){
        return this.BD.object('/referencias/' + id);
    }
    public createReferencia(referencia:any){
        return this.BD.database.ref('/referencias/' + referencia.id).set(referencia);
    }
    public editReferencia(referencia:any){
        return this.BD.database.ref('/referencias/' + referencia.id).set(referencia);
    }
    public deleteReferencia(referencia:any){
        return this.BD.database.ref('/referencias/' + referencia.id).remove();
    }
}