import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  /* ESTA ES LA ESTRUCTURA QUE REQUIERE EL @Input() NO ES UN OBJETO NUEVO Y SE ESTA USANDO LA INTERFACE DE PERSONAJE   */
@Input() nuevo: Personaje = {
  nombre: '',
  poder: 7
}

constructor (private dbzService: DbzService){}

agregar () {
  if(this.nuevo.nombre.trim().length === 0) {return;}
  console.log(this.nuevo)
 this.dbzService.agregarPersonaje(this.nuevo)
  this.nuevo= {
    nombre: ' ',
    poder: 0
  }
}




}
