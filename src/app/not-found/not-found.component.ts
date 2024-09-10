import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="not-found-container">
  <!-- Icono de error -->
  <div class="icono-error">
    <i class="fas fa-exclamation-triangle"></i>
  </div>

  <!-- Mensaje de error -->
  <h1>Página no encontrada</h1>
  <p>Lo sentimos, la página que buscas no existe.</p>

  <!-- Enlace al home -->
  <a routerLink="/" class="enlace-home">
    <i class="fas fa-home"></i> Volver al inicio
  </a>
</div>
  `,
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

}
