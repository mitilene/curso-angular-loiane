import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  getAulas() {
    return ["Property Binding e Interpolação", "Class e Style Binding", "Event Binding", "Two-way Data Binding", "Input properties", "Output properties", "Ciclo de vida (life-cycle) do Component", "Acesso ao DOM e ao Template com ViewChild"]
  }
}
