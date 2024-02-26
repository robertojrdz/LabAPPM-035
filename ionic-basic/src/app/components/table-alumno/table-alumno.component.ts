import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Alumno } from 'src/app/interface/alumno';

@Component({
  selector: 'app-table-alumno',
  templateUrl: './table-alumno.component.html',
  styleUrls: ['./table-alumno.component.scss'],
})
export class TableAlumnoComponent implements OnInit {

  @Input() alumnosList:Alumno[] =[];
  @Output() eliminar: any = new EventEmitter<Alumno>();
  @Output() editar: any = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

}