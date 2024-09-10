import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { IArticulo } from '../types/types';
import { ApiArticulosService } from '../services/api-articulos.service';
import { Router } from '@angular/router';
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: 'app-articulos-list',
  standalone: true,
  imports: [AsyncPipe, LoadingComponent],
  template: `
    <div>
      @let articulosList = (articulosResult$ | async);

      @if(!articulosList?.length){
        <app-loading/>
      }@else {
    

            @for(articulo of articulosList; track articulo.id; let i = $index){
            
            <article>
                <img src="{{articulo.urlfoto ? articulo.urlfoto : 'NoFotoNaturaConBian.webp'}}"/>
                <p>{{articulo.nombre}}</p>
                <a (click)="onArticuloClicked(articulo.id)" class="enlace-more">
                  <i class="fa-solid fa-eye"></i>
                  Ver mas
                </a>

            </article>


            }

            <p> Cantidad de articulos: {{ (articulosResult$ | async)?.length }}</p>            
            
      }

    </div>
  `,
  styleUrl: './articulos-list.component.css'
})
export class ArticulosListComponent implements OnInit{
  public articulosResult$!: Observable<IArticulo[]>;
  constructor(private api: ApiArticulosService, private router: Router) {}
  ngOnInit(): void {
    this.articulosResult$ = this.api.GetCollection();
  }
  onArticuloClicked(artId: string): void {
    this.router.navigate(['/articulos', artId]);
  }
}
