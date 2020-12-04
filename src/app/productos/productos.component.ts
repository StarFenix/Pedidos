import { Component, OnInit } from '@angular/core';
import { Productos } from '../models/productos';
import { PedidosService } from '../services/pedidos.service';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  producto: Array<Productos> = new Array<Productos>();
  constructor(public productoServicio: ProductoService, public pedidoServicio: PedidosService) { }

  ngOnInit(){
    this.producto = this.productoServicio.productosLocalStorage;
  }

  buscarProductos(nombreBuscar){
    //let nombreBuscar: string = event.target.value;
    this.producto = this.productoServicio.productosLocalStorage.filter(producto=>{
      return producto.nombre.toLocaleLowerCase().includes(nombreBuscar.toLocaleLowerCase())
    })
  }

  agregar(productos: Productos){
    this.pedidoServicio.pedido.agregarProducto(productos);
    this.pedidoServicio.guardarLocalStorage();
    console.log(this.pedidoServicio.pedido);

  }
}
