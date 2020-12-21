import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { referenciaModel } from '../../app/models/referenciaModel';
import { referenciasService} from '../../services/referenciasServices';

/**
 * Generated class for the ReferenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-referencia',
  templateUrl: 'referencia.html',
})
export class ReferenciaPage {
  referencia = {} as referenciaModel;
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public referenciasservices:referenciasService,
    private alertCtrl: AlertController) {
      this.referencia = navParams.data.referencia;
  }

  guardarReferencia(){
    if(!this.referencia.idreferencia){
      this.referencia.idreferencia = Date.now();
    }
    this.referenciasservices.createReferencia(this.referencia);
    console.log(this.referencia);
    this.showAlert('Referencia agregada con éxito');
    this.navCtrl.pop();
  }

  showAlert(mensaje:string) {
    const alert = this.alertCtrl.create({
      title: 'Notificación',
      subTitle: mensaje,
      buttons: ['OK']
    });
    alert.present();
  }

}
