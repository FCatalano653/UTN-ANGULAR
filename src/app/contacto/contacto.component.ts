import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  template: `
    <main>
            <div class="contenedor-login">
                <h2>Formulario de Contacto</h2>
                <form id="form-login" method="post"
                [formGroup]="contactoForm"
                (submit)="handleSubmit()">
                <div class="grupo">
                        <div class="labelIcon-div">
                            <i class="fa-solid fa-envelope"></i>
                            <label for="email"> Correo electrónico </label>
                        </div>
                        <input type="email" formControlName="email" placeholder="Ingresá tu correo" />
                        <div class="error" *ngIf="contactoForm.get('email')?.invalid && contactoForm.get('email')?.touched">
                            <p>El correo electrónico es obligatorio y debe ser válido.</p>
                        </div>  
                    </div>
                    <div class="grupo">
                        <div class="labelIcon-div">
                            <i class="fa-solid fa-signature"></i>
                            <label for="nombre">Nombre y Apellido</label>
                        </div>
                        <input type="text" formControlName="nombre" placeholder="Ingresá tu nombre y apellido" />   
                        <div class="error" *ngIf="contactoForm.get('nombre')?.invalid && contactoForm.get('nombre')?.touched">
                          <p>El campo nombre y apellido es obligatorio.</p>
                        </div>      
                    </div>
                    
                    <div class="grupo">
                        <div class="labelIcon-div">
                            <i class="fa-solid fa-phone"></i>
                            <label for="password">Telefono</label>
                        </div>
                        <input type="text" formControlName="telefono" placeholder="Ingresá tu contraseña" />  
                        <div class="error" *ngIf="contactoForm.get('telefono')?.invalid && contactoForm.get('telefono')?.touched">
                          <p>El teléfono es obligatorio.</p>
                        </div>                      
                    </div>
                    <div class="boton-container">
                        <button id="botonIngresar" type="submit" class="boton">Enviar</button>                        
                    </div>

                                                 
                </form>

            </div>
        </main>
  `,
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  contactoForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    nombre: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required)
  })


  get email(){
    return this.contactoForm.get('email') as FormControl
  }

  get nombre(){
    return this.contactoForm.get('nombre') as FormControl
  }

  get telefono(){
    return this.contactoForm.get('telefono') as FormControl
  }

  handleSubmit(){
    if(this.contactoForm.invalid) return;

    const newContacto = {
      email: this.email.value,
      nombre: this.nombre.value,
      telefono: this.telefono.value,
    };

    alert(JSON.stringify(newContacto));

  }

}
