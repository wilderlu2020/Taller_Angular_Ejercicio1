import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductoCard} from './producto-card/producto-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, FormsModule, ProductoCard],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  titulo: string = 'lista de productos';
  fecha: Date = new Date();
  mostrar: boolean = true;

  productos: string[] = ['Manzanas', 'Naranjas', 'Peras'];
  nuevoProducto: string = '';

  toggleLista() {
    this.mostrar = !this.mostrar;
  }

  agregarProducto() {
    if (this.nuevoProducto.trim() !== '') {
      this.productos.push(this.nuevoProducto);
      this.nuevoProducto = '';
    }
  }
}
