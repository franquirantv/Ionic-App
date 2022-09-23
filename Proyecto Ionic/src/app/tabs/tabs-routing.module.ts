import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'nuevo-parte',
        loadChildren: () =>
          import('../nuevo-parte/nuevo-parte.module').then(
            (m) => m.NuevoPartePageModule
          ),
      },
      {
        path: 'partes',
        loadChildren: () =>
          import('../partes/partes.module').then((m) => m.PartesPageModule),
      },
      {
        path: 'gestion',
        loadChildren: () =>
          import('../gestion/gestion.module').then((m) => m.GestionPageModule),
      },
      {
        path: 'contacto',
        loadChildren: () =>
          import('../contacto/contacto.module').then(
            (m) => m.ContactoPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/tabs/nuevo-parte',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/nuevo-parte',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
