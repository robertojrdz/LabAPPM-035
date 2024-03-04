import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interface/personaje';
import { EnvioReceptorService } from '../service/envio-receptor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  user: Personaje = {name:'Pedro Perez object', uuid:"34523452345234523452345", email:"correo@gmail.com"};
  list: Personaje[]= [
    {name:'Pedro Perez 1', uuid:"34523452345234523452345", email:"correo@gmail.com"},
    {name:'Pedro Perez 2', uuid:"34523452345234523452345", email:"correo@gmail.com"},
    {name:'Pedro Perez 3', uuid:"34523452345234523452345", email:"correo@gmail.com"}
  ];

  constructor(
    private envioReceptor: EnvioReceptorService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  redireccionReceptor(){
    this.envioReceptor.sendObjectSource(this.user);
    this.envioReceptor.sendListSource(this.list);
    this.router.navigate(['/receptor']);
  }
}
