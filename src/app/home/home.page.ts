import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public feriados: any = []; 

  constructor(
    public http: HttpClient
  ) { // Será executado toda vez que a página for carregada
    this.criarFeriados();
  }

  //Função responsável por criar os feriados dentro da variavel this.feriados
  criarFeriados() {
    const apiToken = "6901|I4Hxgnuye4cigDKZFZm7E6EvqxfiMwtO";
    const ano = "2024";
    const url = `https://api.invertexto.com/v1/holidays/${ano}?token=${apiToken}`;

    this.http.get(url).subscribe((retorno) => {
      this.feriados = retorno;
    });
  }

  //Formatar a data para o padrão brasileiro
  formatarDataParaBr(data: string){
    
    //2024-01-01
    // 2024 - 0
    // 01   - 1
    // 01   - 2

    //01/01/2024

    let partes = data.split('-');
    return `${partes[2]}/${partes[1]}/${partes[0]}`;


  }

}
