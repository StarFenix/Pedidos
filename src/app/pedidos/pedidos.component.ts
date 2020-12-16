import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(public pedidoServicio: PedidosService) { }

  ngOnInit(): void {

  }
  calcularTotal(posicion: number){
    this.pedidoServicio.pedido.actualizarCantidades(posicion)
    this.pedidoServicio.guardarLocalStorage();
  }

  guardar(){
    this.pedidoServicio.guardarPedido();
  }

}
