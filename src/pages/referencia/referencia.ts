import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { classReferencia } from '../classReferencia';

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
  referencia: classReferencia;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.referencia = navParams.data.referencia || {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReferenciaPage');
  }

}
