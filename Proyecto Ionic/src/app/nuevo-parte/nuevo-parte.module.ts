import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NuevoPartePage } from './nuevo-parte.page';

import { NuevoPartePageRoutingModule } from './nuevo-parte-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoPartePageRoutingModule,
  ],
  declarations: [NuevoPartePage],
})
export class NuevoPartePageModule {}
