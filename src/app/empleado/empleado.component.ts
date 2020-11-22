import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  public empleado:Empleado;

  constructor() { 
    this.empleado = new Empleado("Pablo",28,"POwner",true);
  }

  ngOnInit(): void {
    
  }

}
