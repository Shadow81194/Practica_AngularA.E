import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gasto } from '../models/gasto'

@Injectable({
  providedIn: 'root'
})
export class GastoService {
  selectedGasto: Gasto;
  gastos: Gasto[] = [];
  constructor(private http: HttpClient) {
    this.selectedGasto = new Gasto();
  }

  getGastos(){
    return this.http.get('http://localhost:5000/misitio');
  }

  readonly URL_API='http://localhost:5000/misitio';
postGasto(Gasto: Gasto){
 return this.http.post(this.URL_API,Gasto);
 }

 putGasto(gasto: Gasto){
  return this.http.put(this.URL_API+'/$(gasto._id)',gasto);
 }
 
 deleteGasto(_id:string){
  return this.http.delete(this.URL_API+'/${_id}');
 }
 
}

