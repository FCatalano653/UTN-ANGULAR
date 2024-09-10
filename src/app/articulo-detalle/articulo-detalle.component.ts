import { Component, inject, Input, OnInit } from '@angular/core';
import { LoadingComponent } from "../loading/loading.component";
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { IArticulo } from '../types/types';
import { ApiArticulosService } from '../services/api-articulos.service';

@Component({
  selector: 'app-articulo-detalle',
  standalone: true,
  imports: [LoadingComponent, AsyncPipe],
  template: `
    @let articulo = (articulo$ | async);
    @if(!articulo){
      <app-loading/>
    }@else {
    <div class="product-container">
  <!-- Imagen del producto -->
  <div class="product-image">
    <img src="{{articulo.urlfoto ? articulo.urlfoto : 'NoFotoNaturaConBian.webp'}}" alt="Producto" />
  </div>

  <!-- Información del producto -->
  <div class="product-info">
    <h1 class="product-name">{{articulo.nombre}}</h1>
    <p class="product-code">Código: {{articulo.codigo}}</p>
    <p class="product-description">
      {{articulo.descripcion}}
    </p>
    <p class="product-price">{{articulo.costo*articulo.coeficiente}}</p>

    <p class="product-code">Stock Disponible: {{articulo.stock}}</p>

    <!-- Botón para añadir al carrito -->
    <button class="btn-add-to-cart">Añadir al carrito</button>
  </div>
</div>
    }
  `,
  styleUrl: './articulo-detalle.component.css'
})
export class ArticuloDetalleComponent implements OnInit{
  public articulo$!: Observable<IArticulo>;
  private api: ApiArticulosService = inject(ApiArticulosService);
  @Input('id') artId!: string; //si la variable heroId se llamara id, no necesito indicarle el nombre del param al decorador Input
  ngOnInit(): void {
    this.articulo$ = this.api.GetPrimero(this.artId);
  }

}
