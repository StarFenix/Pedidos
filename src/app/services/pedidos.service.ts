import { Injectable } from '@angular/core';
import { DetallePedido } from '../models/detalle-pedido';
import { Pedido } from '../models/pedido';
import { Productos } from '../models/productos';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  pedido: Pedido = new Pedido();
  constructor() { }

}
