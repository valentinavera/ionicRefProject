import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { usuario } from '../../app/models/usuarioModel';
import { sessionServices } from '../../services/sessionServices';
import { HomePage } from '../home/home';
import { RegistroUsuarioPage } from '../registro-usuario/registro-usuario';

/**
 * Generated class for the InicioSesionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio-sesion',
  templateUrl: 'inicio-sesion.html',
})
export class InicioSesionPage {
  varUsuario = {} as usuario;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: sessionServices,
    public alertCtrl: AlertController) {
  }

  registrarView(){
    this.navCtrl.push(RegistroUsuarioPage);
  }
  inicioSesion(){
    this.authService.signInUser(this.varUsuario);
    this.showAlert('Sesión iniciada exitosamente');
    this.navCtrl.setRoot(HomePage);
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
