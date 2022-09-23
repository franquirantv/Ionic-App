import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../models/Cliente';
@Component({
  selector: 'app-detalles-clientes',
  templateUrl: './detalles-clientes.page.html',
  styleUrls: ['./detalles-clientes.page.scss'],
})
export class DetallesClientesPage implements OnInit {

  id:number;
  data_c: Cliente;
  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService
  ) {
      this.data_c = new Cliente();
      this.id = this.data_c.id;
  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data_c = this.router.getCurrentNavigation().extras.state.cliente1;
      }
    });
  }
}