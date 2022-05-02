import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 })
export class ListadoComponent  {
  heroes: string[]=['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Pepito'];
  heroeBorrado: string = '';

  borrarElemento():void{
    this.heroeBorrado = this.heroes.shift() || ''; /* SOLUCIONA EL ERROR DE STRING UNDEFINED */
    
    
    
    }


}
