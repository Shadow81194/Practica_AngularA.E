import { Component } from '@angular/core';
import { RepoteService } from '../repote.service';
import { Gasto } from '../Gasto';

import {  OnInit } from '@angular/core';
@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})

export class ReporteComponent implements OnInit{
  gastos:Gasto[]=[];
  constructor(private repoteService:RepoteService) {
  this.repoteService.obtenerDatos().subscribe(data =>
  {
  console.log(data);
  this.gastos=data;
  });
  }
  ngOnInit(): void{

    this.getGastos();
  }

  getGastos(){

    this.repoteService.obtenerDatos()
    .subscribe (res=> {
      this.repoteService.gastos=res as Gasto[];
      console.log(res);
    })
  }
  }

