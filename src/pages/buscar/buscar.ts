import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { referenciaModel } from '../../app/models/referenciaModel';
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

  query:string;
  listQuery: any = [];
  referenciasQuery: any = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public refService: referenciasService) {
  }

  buscarReferencia(){

    this.refService.getReferencias().valueChanges()
      .subscribe((referenciasBD)=>{
        this.listQuery=referenciasBD;
        //console.log(this.listQuery);
        this.referenciasQuery = this.listQuery.filter(data=>{
          console.log(this.referenciasQuery);
          return data.anyopub.toString().trim() === this.query;
        });
      });

      
  }

}
