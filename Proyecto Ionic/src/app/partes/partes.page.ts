import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Parte } from '../models/Parte';

@Component({
  selector: 'app-partes',
  templateUrl: 'partes.page.html',
  styleUrls: ['partes.page.scss'],
})
export class PartesPage {
  parte: any;

  constructor(public apiService: ApiService, private router: Router, private alertCtrl: AlertController) {
    this.parte = [];
  }

  async presentAlertConfirm()  {

    const alert = await this.alertCtrl.create({
      header: 'Eliminar',
      message: 'Si pulsas en el boton de confirmar el parte se borrará para <strong>siempre</strong>.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirmar',
          handler: (res) => {
            console.log('Confirm Okay');
          }
        }
      ]
    }).then(res => res.present() );
  }
  ionViewWillEnter() {
    this.getAllPartes();
  }
  getAllPartes() {
    this.apiService.getListParte().subscribe((response) => {
      this.parte = response;
    });
  }
  delete(item) {
    this.presentAlertConfirm();
    this.apiService.deleteParte(item.id).subscribe((Response) => {
      this.getAllPartes();
    });
  }
  editar(item) {
    let navigationExtras: NavigationExtras = {
      state: {
        parte: item,
      },
    };
    this.router.navigate(['/editar-partes'], navigationExtras);
  }
  detalle(item) {
    let navigationExtras: NavigationExtras = {
      state: {
        parte: item,
      },
    };
    this.router.navigate(['/detalles'], navigationExtras);
  }
}
