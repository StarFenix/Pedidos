import { Component, OnInit } from '@angular/core';

interface Clientes{
  nombre: string;
  apellido: string;
  edad: number;
}

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes: Array<Clientes> = new Array<Clientes>();
  constructor() { }

  ngOnInit(): void {
    /*this.clientes.push({
      nombre: "Jazmín",
      apellido: "Santiago",
      edad: 23
    },
    {
      nombre: "Saúl",
      apellido: "Torres",
      edad: 25
    }
    ) */
  }

  guardarCliente(){
    localStorage.setItem("clientes", JSON.stringify(this.clientes))
  }

  leerCliente(){
    this.clientes = JSON.parse(localStorage.getItem("clientes"))
  }

}
