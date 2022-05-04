import { Component, Input, } from '@angular/core';

import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-personajess',
  templateUrl: './personajess.component.html',
  styleUrls: ['./personajess.component.css']
})
export class PersonajessComponent {
 [x: string]: any;

 get personajes(){
   return this.dbzService.personajes;
 }

 constructor(private dbzService:DbzService) {

 }

}
