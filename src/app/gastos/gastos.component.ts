import { Component } from '@angular/core';
import { GastoService } from '../services/gasto.service'; 
import {  OnInit } from '@angular/core';
import { Gasto } from '../models/gasto';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})

export class GastosComponent implements OnInit {
  // Declare gastoService as a property
  constructor(public gastoService: GastoService) {
      
  }
  resetForm(form?:NgForm)
  {
  if(form)
  {
  form.reset();
  this.gastoService.selectedGasto=new Gasto();
  }
  }
    addGasto(form:NgForm)
  {
  this.gastoService.postGasto(form.value)
  .subscribe(res=>{
  console.log(res);
  })
  }
  getGastos()
  {
    this.gastoService.getGastos()
    .subscribe(res=>{
    this.gastoService.gastos=res as Gasto[];
    console.log(res);
    })
    }

  ngOnInit() {
    // Component initialization logic if needed
    this.getGastos();
  }

  // Your other component methods
}


