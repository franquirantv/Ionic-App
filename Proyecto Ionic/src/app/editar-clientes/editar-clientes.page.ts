import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../models/cliente';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-editar-clientes',
  templateUrl: './editar-clientes.page.html',
  styleUrls: ['./editar-clientes.page.scss'],
})
export class EditarClientesPage implements OnInit {
  id: number;
  data: Cliente;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService
  ) {
    this.data = new Cliente();
    this.id = this.data.id;
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.cliente1;
      }
    });
  }
  update() {
    this.apiService.updateCliente(this.data).subscribe((response) => {
      this.router.navigate(['/tabs/gestion']);
    });
  }
}
