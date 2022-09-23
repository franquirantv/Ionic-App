import { Time } from '@angular/common';

export class Parte {
  id: number;
  fecha: Date;
  hora: Time;
  descripcion: string;
  incidencia_resuelta: boolean;
  tiempo_dedicado_en_horas: number;
}
