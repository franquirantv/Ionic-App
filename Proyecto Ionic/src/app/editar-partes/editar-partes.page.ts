import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Parte } from '../models/parte';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-editar-partes',
  templateUrl: './editar-partes.page.html',
  styleUrls: ['./editar-partes.page.scss'],
})
export class EditarPartesPage implements OnInit {
  id: number;
  data: Parte;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService
  ) {
    this.data = new Parte();
    this.id = this.data.id;
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.parte;
      }
    });
  }
  update() {
    this.apiService.updateParte(this.data).subscribe((response) => {
      this.router.navigate(['/tabs/partes']);
    });
  }
}
