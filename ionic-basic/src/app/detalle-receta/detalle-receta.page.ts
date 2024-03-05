import { Component, OnInit } from '@angular/core';
import { RecetaService } from '../service/receta.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-receta',
  templateUrl: './detalle-receta.page.html',
  styleUrls: ['./detalle-receta.page.scss'],
})
export class DetalleRecetaPage implements OnInit {
  idReceta: number = 0;
  receta: any;
  private recetaService: RecetaService;
  private router: Router;
  private activatedRouter: ActivatedRoute;

  constructor(
    recetaService: RecetaService,
    router: Router,
    activatedRouter: ActivatedRoute
  ) {
    this.recetaService = recetaService;
    this.router = router;
    this.activatedRouter = activatedRouter;
  }

  ngOnInit() {
    this.activatedRouter.paramMap.subscribe((paramMap: any) => {
      this.idReceta = Number.parseInt(paramMap.get('idReceta'));
      this.receta = this.recetaService.getReceta(this.idReceta);
    });
  }
}
