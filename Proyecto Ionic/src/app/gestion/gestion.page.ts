import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Cliente } from '../models/Cliente';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.page.html',
  styleUrls: ['./gestion.page.scss'],
})
export class GestionPage {
  cliente: Cliente;
  cliente1: any;

  constructor(private apiService: ApiService, private router: Router) {
    this.cliente = new Cliente();
    this.cliente1 = [];
  }

  nuevoCliente() {
    this.apiService.createCliente(this.cliente).subscribe((response) => {
      this.router.navigate(['/tabs/nuevo-parte']);
    });
  }

  ionViewWillEnter() {
    this.getAllClientes();
  }
  getAllClientes() {
    this.apiService.getListCliente().subscribe((response) => {
      this.cliente1 = response;
    });
  }
  editar(item) {
    let navigationExtras: NavigationExtras = {
      state: {
        cliente1: item,
      },
    };
    this.router.navigate(['/editar-clientes'], navigationExtras);
  }
  detalle(item) {
    let navigationExtras: NavigationExtras = {
      state: {
        cliente1: item,
      },
    };
    this.router.navigate(['/detalles-clientes'], navigationExtras);
  }
  delete(item) {
    this.apiService.deleteCliente(item.id).subscribe((Response) => {
      this.getAllClientes();
    });
  }
}
