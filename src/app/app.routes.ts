import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArticulosListComponent } from './articulos-list/articulos-list.component';
import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
  { path: 'articulos', title: 'Articulos Natura', component: ArticulosListComponent },  
  { path: 'contacto', title: 'Contacto', component: ContactoComponent },  
  { path: 'articulos/:id', title: 'Articulo', component: ArticuloDetalleComponent },
  { path: '', redirectTo:'/articulos', pathMatch:'full' },
  { path: '**', component: NotFoundComponent },
];
