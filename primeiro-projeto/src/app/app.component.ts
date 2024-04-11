import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Primeiro Projeto';
  aulas: string[];

  constructor(
    private appService: AppService
  ) {
    this.aulas = this.appService.getAulas();
  }

}
