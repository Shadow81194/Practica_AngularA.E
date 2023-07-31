import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Gasto } from './Gasto';
import { User } from './User';


const configUrl = 'assets/datos.json';

@Injectable({
  providedIn: 'root'
})


export class RepoteService {
  gastos:Gasto[]=[];
  readonly URL_API='http://localhost:5000/misitio/calculo';

  constructor(private httpclient: HttpClient) {
    console.log('El servicio Http esta funcionando…')
  }

  /*obtenerDatos() {
    return this.httpclient.get<Gasto[]>(this.URL_API);
  }*/
  obtenerDatos(){
    return this.httpclient.get<Gasto[]>('https://jsonplaceholder.typicode.com/users');

   
  }

}

