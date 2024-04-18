import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  url: string = "http://loiane.com";
  cursoAngular: boolean = true;
  urlImage: string = "http://lorempixel.com.br/400/200/nature";
  valorDigitado: string = "";
  valorSalvo: string = "";
  isMouseOver: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert("Botão clicado");
  }

  onKeyUp(event: KeyboardEvent) {
    console.log((<HTMLInputElement>event.target).value);
    this.valorDigitado = (<HTMLInputElement>event.target).value;
  }

  onKeyUpEnter(event: string) {
    console.log(event, "aqui")
    this.valorSalvo = event;
  }

  onMouseOver() {
    this.isMouseOver = !this.isMouseOver;
  }

}
