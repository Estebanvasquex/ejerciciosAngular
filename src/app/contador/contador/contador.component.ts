
import {Component} from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
    
    <h1>{{title}}</h1>

        <button (click)="numero = numero + 1">+1</button>
        <span>{{numero}}</span>
        <button (click)="numero = numero - 1">-1</button>

        <br>
        <br>

        <button (click)="sumar()">+1</button>
        <span>{{numero2}}</span>
        <button (click)="restar()">-1</button>

        <br>
        <br>

        <button (click)="acomular(base)">+1</button>
        <span>{{numero3}}</span>
        <button (click)="acomular(-base)">-1</button>
    
    `

})


export class ContadorComponent{

    title: string = 'CONTADOR';
    numero : number = 10;
    numero2: number = 10;
    numero3: number = 10;
    base   : number = 10;
  
    /* METODOS PARA CONTADOR */
    
    sumar(){
      this.numero2 += 1;
    }
    
    restar(){
      this.numero2 -= 1;
    }
    /* EJEMPLO 3 CON METODOS Y ENVIANDO ARGUMENTOS, ES LA MANERA IDEAL */
    
    acomular(valor:number){
      this.numero3 += valor;
    }
  

}