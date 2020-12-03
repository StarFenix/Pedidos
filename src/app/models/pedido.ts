import { DetallePedido } from "./detalle-pedido";
import { Productos } from './productos';

export class Pedido{
  pedidoID: number;
  clienteID: number;
  nombreCliente: string;
  total: number;
  detallePedido: Array<DetallePedido>;

  constructor(){
    this.pedidoID = this.pedidoID;
    this.clienteID = this.clienteID;
    this.nombreCliente = this.nombreCliente;
    this.total = this.total;
    this.detallePedido = new Array<DetallePedido>();
  }

  agregarProducto(producto: Productos){
    let detallePedido: DetallePedido = new DetallePedido();
    detallePedido.cantidad = 1;
    detallePedido.nombreProducto = producto.nombre;
    detallePedido.precio = producto.precio;
    detallePedido.productoID = producto.productoID;
    detallePedido.total  = producto.precio * detallePedido.cantidad;

    let existe: number = this.detallePedido.filter(x=> x.productoID == producto.productoID).length
    if(existe>0){
      let posicion: number = this.detallePedido.findIndex(x=> x.productoID == producto.productoID)
      this.detallePedido[posicion].cantidad++;
      this.detallePedido[posicion].total = this.detallePedido[posicion].cantidad * this.detallePedido[posicion].precio;
    }
    else{
      this.detallePedido.push(detallePedido);
    }
    this.actualizarTotal()
  }

  private actualizarTotal(){
    this.total = 0
    /* for(let producto of this.detallePedido){
      this.total = this.total + producto.total
    } */
    this.detallePedido.forEach(producto=>{
      this.total = this.total + producto.total;
    })
  }
}
