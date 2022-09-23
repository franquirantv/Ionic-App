import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Cliente } from '../models/Cliente';
import { Parte } from '../models/Parte';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  //API Path
  base_path_partes = 'http://localhost:8080/partes';
  base_path_clientes = 'http://localhost:8080/clientes';

  constructor(private http: HttpClient, private alertCtrl: AlertController) {}

  //Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  //----------------------ALERTAS-------------------------------
  async AlertaMismoNIF() {
    let alert = this.alertCtrl.create({
      header: 'Error',
      subHeader: 'Ya existe un cliente con ese DNI.',
      buttons: ['Aceptar']
    });
    (await alert).present();
  }
  async AlertaMismoID() {
    let alert = this.alertCtrl.create({
      header: 'Error',
      subHeader: 'Ese ID ya tiene un cliente asignado.',
      buttons: ['Aceptar']
    });
    (await alert).present();
  }
  async AlertaNIFCliente() {
    let alert = this.alertCtrl.create({
      header: 'Error',
      subHeader: 'La letra del DNI no es correcta.',
      buttons: ['Aceptar']
    });
    (await alert).present();
  }
  async AlertaFecha() {
    let alert = this.alertCtrl.create({
      header: 'Error',
      subHeader: 'La fecha introducida es un dia no laborable.',
      buttons: ['Aceptar']
    });
    (await alert).present();
  }//------------------------------------------------------------

  //Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      //Manejamos errores del cliente o red ocurridos
      console.error('Ha ocurrido un error:', error.error.message);
    } else {
      //Devuelvo codigo error y respuesta en el body con el detalle del error
      console.error('Código Error ${error.status}, ' + 'Body: ${error.error}');
    }
    return throwError('Ha sucedido un problema, reintentelo más tarde.');
  }
  createCliente(item): Observable<Cliente> {
      return this.http
      .post<Cliente>(
        this.base_path_clientes,
        JSON.stringify(item),
        this.httpOptions
      )
      .pipe(retry(2), catchError(this.handleError));
  }
  getCliente(id): Observable<Cliente> {
    return this.http
      .get<Cliente>(this.base_path_clientes + '/' + id)
      .pipe(retry(2), catchError(this.handleError));
  }
  getListCliente(): Observable<Cliente> {
    return this.http
      .get<Cliente>(this.base_path_clientes)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateCliente(item): Observable<Cliente> {
      return this.http
        .put<Cliente>(
          this.base_path_clientes + '/' + item.id,
          JSON.stringify(item),
          this.httpOptions
        )
        .pipe(retry(2), catchError(this.handleError));
  }
  deleteCliente(id): Observable<Cliente> {
    return this.http
      .delete<Cliente>(this.base_path_clientes + '/' + id, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  //------------------------------------------------------PARTES-----------------------------------------------------------------------
  createParte(item): Observable<Parte> {
    return this.http
      .post<Parte>(
        this.base_path_partes,
        JSON.stringify(item),
        this.httpOptions
      )
      .pipe(retry(2), catchError(this.handleError));
  }
  updateParte(item): Observable<Parte> {
      return this.http
        .put<Parte>(
          this.base_path_partes + '/' + item.id,
          JSON.stringify(item),
          this.httpOptions
        )
        .pipe(retry(2), catchError(this.handleError));
  }
  deleteParte(id): Observable<Parte> {
    return this.http
      .delete<Parte>(this.base_path_partes + '/' + id, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  getListParte(): Observable<Parte> {
    return this.http
      .get<Parte>(this.base_path_partes)
      .pipe(retry(2), catchError(this.handleError));
  }

  getParte(id): Observable<Parte> {
    return this.http
      .get<Parte>(this.base_path_partes + '/' + id)
      .pipe(retry(2), catchError(this.handleError));
  }

  //----------------APIKEY----------------------------
  getApikeyUsuario(apikey): Observable<Cliente['id']> {
    return this.http
      .get<Cliente['id']>(this.base_path_clientes + '/' + apikey)
      .pipe(retry(2), catchError(this.handleError));
  }
  //--------------------------------------------------
  //----------------VALIDACIONES----------------------
  //metodo para devolver el id de un cliente
  ObtenerClientesID(id): Observable<Cliente['id']> {
    return this.http
      .get<Cliente['id']>(this.base_path_clientes + '/' + id,)
      .pipe(retry(2), catchError(this.handleError));
  }
  ValidarIDCliente(id): boolean {
    var i;
    for (i = 1; i<this.getListCliente.length; i++){

      //si algun id coincide se devuelve true
      if (id != this.ObtenerClientesID(i)) {
        return true;
      }
    }
    //si ninguno coincide devuelve false
    return false;
  }

  //metodo para obtener el nif de un usuario a partir de su id
  ObtenerClienteNIF(id): Observable<Cliente['dni']> {
    return this.http
      .get<Cliente['dni']>(this.base_path_clientes + '/' + id)
      .pipe(retry(2), catchError(this.handleError));
  }
  ValidarExisteClienteMismoNIF(nif): boolean {
    var i;
    for (i = 1; i<this.getListCliente.length; i++){
      if (nif == this.ObtenerClienteNIF(i)) {
        return false;
      }
    }
    return true;
  }

  ValidarNIFCliente(nif): boolean{
    //declaramos la variable resultado y la inicializamos en false
    var result: boolean;
    result = true;
    var nif2 = new Array(8);
    //almacenamos en las posibles letras que puede tener un dni
    var letras: ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 
            'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 
            'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    let letraNif;

    //separamos el nif pasado por parametro en un array
    nif2 = nif.split('');
    //almacenamos la letra del nif
    letraNif = nif2[8];

    let i;
    //comparamos la letra del nif pasado por parametro con todas las posibles letras 
    //y si alguna coincide se cambia resultado a true
    while(i<letras.length){
      if(letraNif == letras[i]){
        result = false;
      }
      i++;
    }

    return result;
  }
  ValidarFecha(fecha): boolean{
    let result: boolean;
    var dia;

    dia = fecha.getDay;

    //la funcion getDay nos devuelve un numero correspondiente al dia de la fecha proporcionada,
    //0 = Domingo y 6 = Sabado
    //Entonces comprobamos que la fecha que nos pasan por parametro sea distinta a 0 y 6.
    if(dia != 6){
      result = false;
    } else if(dia != 0){
      result = false;
    }else{
      result = true;
    }

    return result;
  }
  //--------------------------------------------------
}
