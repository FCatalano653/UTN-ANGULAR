import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [],
  template: `
      <div class="loading-container">
    <div class="spinner"></div>
    <p>Cargando...</p>
  </div>
  `,
  styleUrl: './loading.component.css'
})
export class LoadingComponent {

}
