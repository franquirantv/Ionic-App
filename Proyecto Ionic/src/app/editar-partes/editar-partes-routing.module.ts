import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarPartesPage } from './editar-partes.page';

const routes: Routes = [
  {
    path: '',
    component: EditarPartesPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarPartesPageRoutingModule {}
