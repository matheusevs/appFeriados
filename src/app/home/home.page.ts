import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public feriados: any = [];
  public anos: number[] = [];
  public anoAtual: number = new Date().getFullYear();

  customActionSheetOptions: any = {
    header: 'Selecione um ano para buscar os feriados',
  };
  
  constructor(
    public http: HttpClient
  ) { // Será executado toda vez que a página for carregada
    this.criarAnos();
  }

  //Função responsável por criar os feriados dentro da variavel this.feriados
  criarFeriados() {
    const apiToken = "6901|I4Hxgnuye4cigDKZFZm7E6EvqxfiMwtO";
    const url = `https://api.invertexto.com/v1/holidays/${this.anoAtual}?token=${apiToken}`;

    this.http.get(url).subscribe((retorno) => {
      this.feriados = retorno;
    });

    const divElemento = document.getElementById('div-feriados');
    if (divElemento) {
      divElemento.style.display = 'block';
    }
  }

  //Formatar a data para o padrão brasileiro
  formatarDataParaBr(data: string){
    let partes = data.split('-');
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
  }

  //Função responsável por criar os anos dentro da variável this.anos
  criarAnos() {
    const anoInicial = this.anoAtual - 20;
    const anoFinal = this.anoAtual + 20;

    for (let ano = anoInicial; ano <= anoFinal; ano++) {
      this.anos.push(ano);
    }
  }

}
