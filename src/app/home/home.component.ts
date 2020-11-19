import { Component, OnInit } from '@angular/core';
import { Clientes } from '../models/clientes';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cliente: Array<Clientes> = new Array<Clientes>();
  constructor(public clienteServicio: ClientesService) { }

  ngOnInit(): void {
    this.cliente = this.clienteServicio.clientesLocalStorage;
  }

  buscarClientes(event){
    let nombreBuscar: string = event.target.value;
    this.cliente = this.clienteServicio.clientesLocalStorage.filter(x=>{
      return x.nombre.toLocaleLowerCase().includes(nombreBuscar.toLocaleLowerCase())
    })
  }


}
