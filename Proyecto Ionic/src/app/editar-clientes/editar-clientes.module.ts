import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarClientesPageRoutingModule } from './editar-clientes-routing.module';

import { EditarClientesPage } from './editar-clientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarClientesPageRoutingModule,
  ],
  declarations: [EditarClientesPage],
})
export class EditarClientesPageModule {}
