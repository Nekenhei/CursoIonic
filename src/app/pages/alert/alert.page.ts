import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo: string;

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
      const alert = await this.alertCtrl.create({
        header: 'Alert',
        subHeader: 'Subtitle',
        message: 'This is an alert message.',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Cancelar');
            }
          },
            {
                text: 'Ok',
                handler: (blah) => {
                  console.log('Boton OK');
                }
              }
        ]
              });
    
      await alert.present();
    }

    async presentInput() {
      const input = await this.alertCtrl.create({
        header: 'Titulo',
        subHeader: 'Cambiar titulo',
        inputs: [
          {
          name: 'txtName',
          type: 'text',
          placeholder: 'Ingresar titulo ventana',
          handler: () => {
            console.log('Confirm Cancel');
          }
          }
        ],
        buttons: [
          {
            text: 'OK',
            handler: (data) => {
              console.log('OK presionado', data);
              this.titulo = data.txtName;
            }
          },
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              console.log('Cancelar')
            }
          }
        ]
      });
    
      await input.present();
    }

  }
