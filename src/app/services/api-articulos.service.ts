import { Injectable } from '@angular/core';
import { IArticulo } from '../types/types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiArticulosService {

  private url = 'https://665666719f970b3b36c542e6.mockapi.io/natura/articulos';
  constructor(private http: HttpClient) { }

  GetCollection(){
    return this.http.get<IArticulo[]>(this.url)
  }

  GetPrimero(id: string): Observable<IArticulo> {
    return this.http.get<IArticulo>(this.url+ '/' + id);
  }

}
