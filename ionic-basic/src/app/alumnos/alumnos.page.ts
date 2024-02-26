import { Component, OnInit } from '@angular/core';
import { Alumno } from '../interface/alumno';
import { AlumnosService } from '../service/alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {
  alumnos: Alumno[] = [];
  nombre: string = '';
  matricula: string = '';
  estado: string = '';
  idActualizar: any;
  error: boolean = false;

  constructor(private alumnosService: AlumnosService) {}

  ngOnInit() {
    this.alumnosService.setAlumnos([
      { id: 1, nombre: 'Gerardo Martinez', matricula: '745589' },
      { id: 2, nombre: 'Isela Rodriguez', matricula: '855449' },
      { id: 3, nombre: 'Esteban', matricula: '0021554' }
    ]);

    this.alumnos = this.alumnosService.getAlumnos();
    this.estado = 'guardar';
  }

  public guardar() {
    if((this.nombre == undefined || this.nombre == '') ||
     (this.matricula == undefined || this.matricula == '')) {
      this.error = true;
      return;
    }
    let alumno: Alumno={
      nombre : this.nombre,
      matricula: this.matricula
    };
    if (this.estado ==='actualizar') {
      alumno.id = this.idActualizar;
      this.alumnos = this.alumnosService.actualizar(alumno);
    }
    if (this.estado === 'guardar') {
      this.alumnosService.agregarAlumno(alumno);
      this.alumnos = this.alumnosService.getAlumnos();
    }
    this.cancelar();
  }
  public cancelar(){
    this.estado = 'guardar';
    this.matricula = '';
    this.nombre = '';
    this.error = false;
  }
  public eliminar(id:number){
    this.alumnosService.borrarAlumno(id);
    this.alumnos = this.alumnosService.getAlumnos();
  }
  public editar(alumno:Alumno){
    this.estado = 'actualizar';
    this.matricula = alumno.matricula;
    this.nombre = alumno.nombre;
    this.idActualizar = alumno.id;
  }
}
