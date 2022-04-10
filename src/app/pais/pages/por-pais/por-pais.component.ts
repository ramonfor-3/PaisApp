import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[]=[];

  constructor(private paisService: PaisService) { }
  
  buscar(termino:string){
  
    this.hayError = false;
    this.termino  = termino;

    this.paisService.buscarPais(this.termino)
    .subscribe( (paises) => {
        console.log(paises);
        this.paises = paises;


    },(err)=>{
      this.hayError = true;
      this.paises=[];
    });
  }

  sugerencias (termino:string){
    this.hayError=false;

    this.paisService.buscarPais(termino)
    .subscribe(paises => this.paisesSugeridos = paises.slice(0,5));
  }
}
