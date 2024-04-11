import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  getAulas() {
    return ["Introdução ao Angular", "Ambiente de desenvolvimento (Node.JS, TypeScript e Angular CLI)", "Hello World! Criando o primeiro projeto e o primeiro Component", "Introdução ao TypeScript para Angular", "Módulos (ngModule)", "Templates", "Serviços (Services) e Injeção de Depêndencia (DI)"]
  }
}
