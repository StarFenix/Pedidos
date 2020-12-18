import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProductosComponent } from './productos/productos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { HomeComponent } from './home/home.component';
import { AgregarClientesComponent } from './agregar-clientes/agregar-clientes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientesService } from './services/clientes.service';
import { ProductoService } from './services/producto.service';
import { PedidosService } from './services/pedidos.service';
import { AgregarProductosComponent } from './agregar-productos/agregar-productos.component';
import { ListadoPedidosComponent } from './listado-pedidos/listado-pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ClientesComponent,
    ProductosComponent,
    PedidosComponent,
    HomeComponent,
    AgregarClientesComponent,
    AgregarProductosComponent,
    ListadoPedidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ClientesService,
    ProductoService,
    PedidosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
