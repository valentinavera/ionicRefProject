import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { usuario } from '../../app/models/usuarioModel';
import { sessionServices } from '../../services/sessionServices';
import { HomePage } from '../home/home';

/**
 * Generated class for the RegistroUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro-usuario',
  templateUrl: 'registro-usuario.html',
})
export class RegistroUsuarioPage {
    varUsuario = {} as usuario;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: sessionServices,
    public alertCtrl:AlertController) {
  }

  crearUsuario(){
    this.authService.createUser(this.varUsuario).then((res)=>{
      this.showAlert('Registro completado con éxito');
      this.navCtrl.setRoot(HomePage);
    }).catch((e)=>{
      console.log(e);
      this.showAlert(e.message);
    });
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
