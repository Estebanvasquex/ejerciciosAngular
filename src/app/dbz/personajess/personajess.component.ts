import { Component, Input, } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';


@Component({
  selector: 'app-personajess',
  templateUrl: './personajess.component.html',
  styleUrls: ['./personajess.component.css']
})
export class PersonajessComponent {

  @Input() personajes: Personaje [] = [];

}
