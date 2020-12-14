import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { classReferencia } from '../classReferencia';
import { ReferenciaPage } from '../referencia/referencia';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  referencias: Array<classReferencia> = [];
  constructor(public navCtrl: NavController) {
    this.referencias = [
      {idreferencia: 1,
        titulopub: 'imp',
        autores: 'uno, dos',
        tipopub:3,
        eventorevista: 'ieee',
        doi: 'sdfsdfsd',
        anyopub: 4}
    ];
  }

  editReferencia(referencia: classReferencia){
    this.navCtrl.push(ReferenciaPage,{referencia:referencia});
  }

  addReferencia(){
    this.navCtrl.push(ReferenciaPage, {titulopub:{}});
  }
  
  deleteReferencia(referencia: classReferencia){

  }

}
