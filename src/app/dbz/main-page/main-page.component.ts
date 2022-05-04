import { Component,  } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personajes: Personaje[]=[
    {
      nombre: 'Vegueta',
      poder: 7500
    },
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Krillin',
      poder: 500
    }
    
  ];

  nuevo:Personaje = {
    nombre: 'ElSebas',
    poder: 100000
  }

   borrar(){
  this.personajes.shift();
} 

agregarNuevoPersonaje(argumento:Personaje){
  console.log(argumento)
  this.personajes.push(argumento)

}

}
