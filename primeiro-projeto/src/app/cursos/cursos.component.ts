import { Component, OnInit } from '@angular/core';

//Services
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  nomePortal: string;
  cursos: string[];

  constructor(
   private cursosService: CursosService
  ) { 
    this.nomePortal = "http://loiane.training";
    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit(): void {
  }

}