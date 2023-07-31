import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-infomacion',
  templateUrl: '../infomacion/infomacion.component.html',
  styleUrls: ['../infomacion/infomacion.component.css']
})
export class InfomacionComponent implements OnInit {
  deducibles = [
    {
      gasto: 'Vivienda',
      descripcion: 'Deducción de gastos relacionados con la vivienda principal, como el pago de hipoteca, intereses, impuestos prediales, seguros, entre otros.',
      infomacionAdicional: 'Algunas restricciones pueden aplicar según las leyes fiscales de cada país.',
      imagen: '../assets/vive.png',
      
    },
    {
      gasto: 'Salud',
      descripcion: 'Deducción de gastos médicos y de salud, como consultas médicas, medicamentos, tratamientos, cirugías, seguros de salud, entre otros.',
      infomacionAdicional: 'Es importante conservar los comprobantes y facturas de los gastos médicos para respaldar la deducción.',
      imagen: '../assets/salu.gif'
    },
    {
      gasto: 'Educación',
      descripcion: 'Deducción de gastos educativos, tales como matrícula escolar, colegiaturas, compra de libros y materiales educativos, cursos de formación, entre otros.',
      infomacionAdicional: 'Verifica las políticas y límites establecidos por las autoridades fiscales en relación con las deducciones educativas.',
      imagen: '../assets/edu.gif'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  informacion(deducible: any) {
    alert('Esta es información adicional sobre ' + deducible.gasto + ':\n' + deducible.infomacionAdicional);
  }

  borrarDeducible(deducible: any) {
    const index = this.deducibles.indexOf(deducible);
    if (index !== -1) {
      this.deducibles.splice(index, 1);
    }
  }
}