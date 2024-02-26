import { Component } from '@angular/core';
import { Producto } from '../../interfaces/producto';
import { ProductosService } from '../../servicios/productos.service';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-productos-lista',
  templateUrl: './productos-lista.component.html',
  styleUrl: './productos-lista.component.scss'
})
export class ProductosListaComponent {
  productos: Producto[] = [];

  constructor(private servicioProductos: ProductosService) {
    this.servicioProductos.getProductos().subscribe(
      response => {
        this.productos = response;
      } 
    );
  }

  ngOnInit(): void {
    //Invocar al servicio para obtener los productos
    
  }

}
