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

  constructor() { }

  ngOnInit(): void {}

  guardarCliente(){
    let agregarClientes: Array<Clientes> = new Array<Clientes>();
    agregarClientes.push({
      nombre: "Jazmín",
      apellido: "Santiago",
      edad: 23
    },
    {
      nombre: "Saúl",
      apellido: "Torres",
      edad: 25
    }
    )
    localStorage.setItem("clientes", JSON.stringify(agregarClientes))
  }

  guardarProductos(){
    let agregarProductos: Array<Productos> = new Array<Productos>();
    agregarProductos.push({
      nombre: "Lavadora",
      precio: 6700
    },
    {
      nombre: "Secadora",
      precio: 2670
    }

    )
    localStorage.setItem("productos", JSON.stringify(agregarProductos))
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

  get clientesLocales(): Clientes[]{
    let clientesLocalStorage: Clientes[] = JSON.parse(localStorage.getItem("clientes"))
    if(clientesLocalStorage == null){
      return new Array<Clientes>();
    }
    return clientesLocalStorage
  }

  get productosLocales(): Productos[]{
    let productosLocalStorage: Productos[] = JSON.parse(localStorage.getItem("productos"))
    if(productosLocalStorage == null){
      return new Array<Productos>();
    }
    return productosLocalStorage
  }
}

