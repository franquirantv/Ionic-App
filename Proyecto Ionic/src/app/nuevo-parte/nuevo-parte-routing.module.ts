import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoPartePage } from './nuevo-parte.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoPartePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoPartePageRoutingModule {}
