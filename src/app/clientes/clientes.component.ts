import { Component, OnInit } from '@angular/core';

interface Clientes{
  nombre: string;
  apellido: string;
  edad: number;
}

interface Productos{
  nombre: string;
  precio: number;
}

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes: Array<Clientes> = new Array<Clientes>();
  productos: Array<Productos> = new Array<Productos>();

  constructor() { }

  ngOnInit(): void {
    /* this.clientes.push({
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

    this.productos.push({
      nombre: "Lavadora",
      precio: 6700
    },
    {
      nombre: "Secadora",
      precio: 2670
    })
  }

  guardarCliente(){
    localStorage.setItem("clientes", JSON.stringify(this.clientes))
  }

  guardarProductos(){
    localStorage.setItem("productos", JSON.stringify(this.productos))
  }

  leer(){
    this.clientes = JSON.parse(localStorage.getItem("clientes"))
    this.productos = JSON.parse(localStorage.getItem("productos"))
  }

  eliminarClientes(){
    localStorage.removeItem("clientes")
  }

  eliminarProductos(){
    localStorage.removeItem("productos")
  }

  eliminarTodo(){
    localStorage.clear()
  }

}
