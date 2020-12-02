import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor(public pedidoServicio: PedidosService, public clienteServicio: ClientesService) { }

  ngOnInit(): void {

  }

}
