import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public feriados: any = []; 

  constructor() { // Será executado toda vez que a página for carregada
    this.criarFeriados();
  }

  //Função responsável por criar os feriados dentro da variavel this.feriados
  criarFeriados() {

    this.feriados = [
      {nome: 'Rafael'},
      {nome: 'Vitoria'},
      {nome: 'Andre'},
      {nome: 'Luciano cruzeirense'}
    ];

    console.log(this.feriados);

  }

}
