import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],  
  styleUrl: './app.component.css',
  template:`

    <main class="main">
      
      <div class="content">
        <header>
          <h1>Natura con Bian E-Commerce</h1>
          <a routerLink="/"> <img src="logo.webp"/> </a>

          <nav>
            <a class="button" routerLink="/articulos" routerLinkActive="activeButton" ariaCurrentWhenActive="page"> Articulos </a> |
            <a class="button" routerLink="/contacto" routerLinkActive="activeButton" ariaCurrentWhenActive="page"> Contacto </a> |
            <a class="button" routerLink="/wwwwwww" routerLinkActive="activeButton" ariaCurrentWhenActive="page"> Not Found </a> 
          </nav>
        </header>

        <router-outlet></router-outlet>

        <footer>
          
          <a href="https://www.linkedin.com/in/francisco-joaquin-catalano-1a7841183/" target="_blank"> <i class="fa-brands fa-linkedin"></i> 
          <p>Desarrollado por el alumno Francisco Joaquín Catalano DNI 45.011.367</p></a>
        </footer>

      </div>
    </main>


  `
  
  
  
})
export class AppComponent {
  title = 'Natura';
}
