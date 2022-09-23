import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarPartesPageRoutingModule } from './editar-partes-routing.module';

import { EditarPartesPage } from './editar-partes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarPartesPageRoutingModule,
  ],
  declarations: [EditarPartesPage],
})
export class EditarPartesPageModule {}
