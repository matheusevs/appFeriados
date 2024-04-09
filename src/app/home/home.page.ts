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
      { // Inicio da posição 0
        nomeDoFeriado : 'Ano Novo',
        levelDoFeriado: 'Mundial',
        tipoDoFeriado : 'Feriado',
        dataDoFeriado : '01/01/2024'
      }, // Final da posição 0
      { // Inicio da posição 1
        nomeDoFeriado : 'Carnaval',
        levelDoFeriado: 'Nacional',
        tipoDoFeriado : 'Feriado',
        dataDoFeriado : '12/02/2024 - 13/02/2024'
      }, // Final da posição 1
      { // Inicio da posição 2
        nomeDoFeriado : 'Quarta-feira de Cinzas',
        levelDoFeriado: 'Nacional',
        tipoDoFeriado : 'Facultativo',
        dataDoFeriado : '14/02/2024'
      }, // Final da posição 2
    ];

    // for
    //foreach

    for(let i = 0; i < this.feriados.length; i++){
      console.log(this.feriados[i])
    }

  }

}
