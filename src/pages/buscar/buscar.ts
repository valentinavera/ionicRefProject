import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { referenciasService } from '../../services/referenciasServices';

/**
 * Generated class for the BuscarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html',
})
export class BuscarPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public refService: referenciasService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscarPage');
  }

}
