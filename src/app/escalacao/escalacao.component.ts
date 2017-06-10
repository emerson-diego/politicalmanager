import { Component, OnInit } from '@angular/core';
import { Parlamentar } from "app/shared/parlamentar";
import { BASE_PARLAMENTARES } from "app/shared/base";
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router'

@Component({
  selector: 'pm-escalacao',
  templateUrl: './escalacao.component.html',
  styleUrls: ['./escalacao.component.css']
})
export class EscalacaoComponent implements OnInit {

  parlamentares: Parlamentar[];
  parlamentaresFiltro: Parlamentar[];
  time: Parlamentar[] = [];
  selectTipoParlamentar: string = 'DEPUTADO';
  selectPartido: string = '';
  tipos: string[];
  partidos: string[];
  ufs: string[];
  selectUF: string = '';
  selectFormacao:string;
  formacoes: string[];
  imagemCampo:string;


  constructor(private router: Router) {

    this.parlamentares = BASE_PARLAMENTARES;

    this.tipos = ['DEPUTADO', 'SENADOR'];

    this.partidos = ['PDT', 'PMDB', 'PSD', 'PT', 'PV'];

    this.ufs = ['PB', 'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RS', 'RO', 'RS', 'SC', 'SP', 'SE', 'TO'];

    this.formacoes = ['4-1', '1-4','2-3','3-2'];

    this.selectFormacao = this.formacoes[3];
      this.imagemCampo = "assets/img/campo32.gif"


  //  this.parlamentares = this.parlamentares.sort(function (a, b) {
    //  return parseFloat(b.nomeParlamentar) - parseFloat(a.nomeParlamentar);
   // });


    this.parlamentaresFiltro = this.parlamentares.filter(
      parlamentar => parlamentar.tipo === this.selectTipoParlamentar);

   this.time.push(this.parlamentaresFiltro[0]);

  }

  selecionarParlamentar(parlamentar: Parlamentar) {

    if (this.time.length < 5) {
      this.time.push(parlamentar);
      parlamentar.escalado = true;
    }


  }

  ngOnInit() {

  }

  onChangeFormacao(){
     if(this.selectFormacao === "4-1"){
       this.imagemCampo = "assets/img/campo41.gif"
     }
     else if(this.selectFormacao === "1-4"){
       this.imagemCampo = "assets/img/campo14.gif"
     }
     else  if(this.selectFormacao === "2-3"){
       this.imagemCampo = "assets/img/campo23.gif"
     }
     else if(this.selectFormacao === "3-2"){
       this.imagemCampo = "assets/img/campo32.gif"
     }
  }

  removerParlamentar(parlamentar: Parlamentar){
    let indice = -1;
    for(let i=0; i<this.time.length;i++){
      if(this.time[i].id == parlamentar.id){
        indice = i;
        this.time = this.time.slice(i,1);
      }
    }

  }



  onChangeTipo() {
    // this.parlamentares.filter

    this.parlamentaresFiltro = this.parlamentares.filter(
      parlamentar => parlamentar.tipo === this.selectTipoParlamentar);

    if (this.selectPartido !== '') {

      this.parlamentaresFiltro = this.parlamentaresFiltro.filter(parlamentar => parlamentar.partido === this.selectPartido);
    }

    if (this.selectUF !== '') {

      this.parlamentaresFiltro = this.parlamentaresFiltro.filter(parlamentar => parlamentar.uf === this.selectUF);
    }
  }

  onChangePartido() {
    // this.parlamentares.filter
    this.parlamentaresFiltro = this.parlamentares.filter(
      parlamentar => parlamentar.tipo === this.selectTipoParlamentar);
    if (this.selectPartido !== '') {

      this.parlamentaresFiltro = this.parlamentaresFiltro.filter(parlamentar => parlamentar.partido === this.selectPartido);
    }

    if (this.selectUF !== '') {

      this.parlamentaresFiltro = this.parlamentaresFiltro.filter(parlamentar => parlamentar.uf === this.selectUF);
    }

  }

  onChangeUF() {

    this.parlamentaresFiltro = this.parlamentares.filter(
      parlamentar => parlamentar.tipo === this.selectTipoParlamentar);

    if (this.selectPartido !== '') {

      this.parlamentaresFiltro = this.parlamentaresFiltro.filter(parlamentar => parlamentar.partido === this.selectPartido);
    }

    if (this.selectUF !== '') {

      this.parlamentaresFiltro = this.parlamentaresFiltro.filter(parlamentar => parlamentar.uf === this.selectUF);
    }

  }

  confirmarEscalacao(){
      this.router.navigate(['/pontuacao']);
  }



}
