import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Parte } from '../models/Parte';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../models/Cliente';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {
  data: Parte;
  id: number;
  data_c: Cliente;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService
  ) {
    this.data = new Parte();
    this.id = this.data.id;

      this.data_c = new Cliente();
      this.id = this.data_c.id;

  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.parte;
        this.data_c = this.router.getCurrentNavigation().extras.state.cliente1;
      }
    });
  }
}
