import { Component } from '@angular/core';
import { AlertController, LoadingController, NavController } from 'ionic-angular';
//import { referenciasService } from '../../services/referenciasServices';
import { classReferencia } from '../classReferencia';
import { ReferenciaPage } from '../referencia/referencia';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  referencias: Array<classReferencia> = [];
  constructor(public navCtrl: NavController, 
    //public referenciasService:referenciasService,
    public alertCtrl:AlertController, 
    public loadingCtrl:LoadingController) {
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
    /*const confirm = this.alertCtrl.create({
      title: 'Eliminar referencia',
      message: '¿Estás seguro de eliminar esta referencia?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Cancelar clicked');
          }
        },
        {
          text: 'Eliminar',
          handler: () => {
            console.log('Eliminar clicked');
            this.referenciasService.deleteReferencia(referencia)
            .then(() => {
              this.presentLoading();
            });
          }
        }
      ]
    });
    confirm.present();*/
  }
  
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Por favor, espera...",
      duration: 1000
    });
    loader.present();
  }

}
