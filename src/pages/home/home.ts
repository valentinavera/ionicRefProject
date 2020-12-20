import { Component } from '@angular/core';
import { AlertController, LoadingController, NavController } from 'ionic-angular';
import { referenciaModel } from '../../app/models/referenciaModel';
import { referenciasService } from '../../services/referenciasServices';
import { BuscarPage } from '../buscar/buscar';
import { ReferenciaPage } from '../referencia/referencia';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  referencias: any = [];
  constructor(public navCtrl: NavController, 
    public referenciasService:referenciasService,
    public alertCtrl:AlertController, 
    public loadingCtrl:LoadingController) {
    
      this.referenciasService.getReferencias().valueChanges()
      .subscribe((referenciasBD)=>{
        this.referencias=referenciasBD;
      });
  }

  editReferencia(ref: referenciaModel){
    this.navCtrl.push(ReferenciaPage,{referencia:ref});
  }

  addReferencia(){
    this.navCtrl.push(ReferenciaPage, {referencia:{}});
  }

  buscarReferencia(){
    this.navCtrl.push(BuscarPage);
  }
  
  deleteReferencia(referencia: any){
    const confirm = this.alertCtrl.create({
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
    confirm.present();
  }
  
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Por favor, espera...",
      duration: 100
    });
    loader.present();
  }

}
