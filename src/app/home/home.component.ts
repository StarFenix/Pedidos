import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clientes } from '../models/clientes';
import { ClientesService } from '../services/clientes.service';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cliente: Array<Clientes> = new Array<Clientes>();
  constructor(public clienteServicio: ClientesService, public pedidoServicio: PedidosService, public route: Router) { }

  ngOnInit(): void {
    this.cliente = this.clienteServicio.clientesLocalStorage;
  }

  buscarClientes(event){
    let nombreBuscar: string = event.target.value;
    this.cliente = this.clienteServicio.clientesLocalStorage.filter(cliente=>{
      return cliente.nombre.toLocaleLowerCase().includes(nombreBuscar.toLocaleLowerCase())
    })
  }

  irProductos(clientes: Clientes){
    this.pedidoServicio.pedido.clienteID = clientes.clienteID;
    this.pedidoServicio.pedido.nombreCliente = `${clientes.nombre} ${clientes.apellido}`;
    this.pedidoServicio.guardarLocalStorage();
    this.route.navigateByUrl("productos")
  }

}
