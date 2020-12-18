import { Injectable } from '@angular/core';
import { DetallePedido } from '../models/detalle-pedido';
import { Pedido } from '../models/pedido';
import { Productos } from '../models/productos';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  pedido: Pedido = new Pedido();
  constructor() {
    this.pedido = this.ultimoPedido;
  }

  guardarLocalStorage(){
    localStorage.setItem("ultimoPedido", JSON.stringify(this.pedido))
  }

  get ultimoPedido(): Pedido{
    let pedidoDesdeLocalStorage: Pedido = new Pedido(JSON.parse(localStorage.getItem("ultimoPedido")))
    if(pedidoDesdeLocalStorage == null){
      return new Pedido();
    }
    return pedidoDesdeLocalStorage;
  }
  guardarPedido(){
    let listadoPedidos: Pedido[] = new Array<Pedido>();
    listadoPedidos = this.listadoPedidosLocalStorage;
    this.pedido.pedidoID = listadoPedidos.length + 1;
    listadoPedidos.push(this.pedido);
    localStorage.setItem("pedidos", JSON.stringify(listadoPedidos))
    localStorage.removeItem("ultimoPedido");
    this.pedido = new Pedido(null);
  }
  get listadoPedidosLocalStorage(): Pedido[]{
    let pedidos: Pedido[] = JSON.parse(localStorage.getItem("pedidos"))
    if(pedidos == null){
      return new Array<Pedido>();
    }
    return pedidos;
  }
}
