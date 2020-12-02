import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Productos } from '../models/productos';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.css']
})
export class AgregarProductosComponent implements OnInit {
  formularioAgregar: FormGroup;
  //producto: Productos = new Productos();
  constructor(private fb: FormBuilder, public productoServicio: ProductoService) { }

  ngOnInit(): void {
    this.formularioAgregar =  this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required]
    })
  }

  agregar(){
    //this.producto = this.formularioAgregar.value as Productos;
    this.productoServicio.agregarLocalStorage(this.formularioAgregar.value)
    this.formularioAgregar.reset()
  }

}
