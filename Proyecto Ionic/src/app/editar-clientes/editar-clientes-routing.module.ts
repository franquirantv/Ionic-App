import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarClientesPage } from './editar-clientes.page';

const routes: Routes = [
  {
    path: '',
    component: EditarClientesPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarClientesPageRoutingModule {}
