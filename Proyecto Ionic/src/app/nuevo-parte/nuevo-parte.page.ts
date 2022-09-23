import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { Parte } from '../models/parte';

@Component({
  selector: 'app-nuevo-parte',
  templateUrl: 'nuevo-parte.html',
  styleUrls: ['./nuevo-parte.page.scss'],
})
export class NuevoPartePage {
  data: Parte;

  constructor(public apiService: ApiService, public router: Router) {
    this.data = new Parte();
    
  }

  ngOnInit() {}
  nuevoParte() {
    this.apiService.createParte(this.data).subscribe((response) => {
      this.router.navigate(['/tabs/partes']);
    });
  }
}
