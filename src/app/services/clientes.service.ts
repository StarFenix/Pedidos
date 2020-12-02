import { Injectable } from '@angular/core';
import { Clientes } from '../models/clientes';
import { JsonPipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  agregarLocalStorage(cliente: Clientes){
    let clientesAntiguos: Clientes[] = this.clientesLocalStorage;
    debugger
    cliente.clienteID = clientesAntiguos.length + 1;
    clientesAntiguos.push(cliente)
    localStorage.setItem ("clientes", JSON.stringify(clientesAntiguos));

  }

  get clientesLocalStorage(): Clientes[]{
    let clienteDesdeLocalStorage: Clientes[] = JSON.parse(localStorage.getItem("clientes"))
    if(clienteDesdeLocalStorage == null){
      return new Array<Clientes>();
    }
    return clienteDesdeLocalStorage;
  }
}
