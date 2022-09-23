import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'editar-partes',
    loadChildren: () =>
      import('./editar-partes/editar-partes.module').then(
        (m) => m.EditarPartesPageModule
      ),
  },
  {
    path: 'detalles',
    loadChildren: () =>
      import('./detalles/detalles.module').then((m) => m.DetallesPageModule),
  },
  {
    path: 'editar-clientes',
    loadChildren: () =>
      import('./editar-clientes/editar-clientes.module').then(
        (m) => m.EditarClientesPageModule
      ),
  },
  {
    path: 'detalles-clientes',
    loadChildren: () => import('./detalles-clientes/detalles-clientes.module').then( m => m.DetallesClientesPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
