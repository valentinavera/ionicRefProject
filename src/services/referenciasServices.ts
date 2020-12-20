import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { referenciaModel } from "../app/models/referenciaModel";

@Injectable()
export class referenciasService{
    constructor(public BD:AngularFireDatabase){

    }
    public getReferencias(){
        return this.BD.list('/referencias/');
    }
    public getReferencia(idreferencia:referenciaModel){
        return this.BD.object('/referencias/' + idreferencia);
    }
    public filtroReferencia(filtro: string){
        return this.BD.database.list('/referencias', {
            query: {
                orderByChild: 'autores',
                equalTo:filtro
            }
        });
    }
    public createReferencia(referencia:referenciaModel){
        return this.BD.database.ref('/referencias/' + referencia.idreferencia).set(referencia);
    }
    public editReferencia(referencia:referenciaModel){
        return this.BD.database.ref('/referencias/' + referencia.idreferencia).set(referencia);
    }
    public deleteReferencia(referencia:referenciaModel){
        return this.BD.database.ref('/referencias/' + referencia.idreferencia).remove();
    }
}