import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl:'heroe.component.html'

})

export class HeroeComponet{
    nombre: string = 'Ironman';
    edad: number = 45

    /* ES UNA PROPIEDAD QUE AL LLAMARLA SERÁ PROCESADA NO ES UN METODO*/
    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    /* ESTE ES UN METODO */

    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman';
        
    }

    cambiarEdad():void{
        this.edad = 20;
    }

}
