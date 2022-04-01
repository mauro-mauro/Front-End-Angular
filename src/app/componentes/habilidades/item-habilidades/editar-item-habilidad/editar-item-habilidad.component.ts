import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultaDBService } from 'src/app/servicios/consulta-db.service';

@Component({
  selector: 'app-editar-item-habilidad',
  templateUrl: './editar-item-habilidad.component.html',
  styleUrls: ['./editar-item-habilidad.component.css']
})
export class EditarItemHabilidadComponent implements OnInit {
  //parametros
  //accion:
  accion: string;
  id: number

  constructor(
    private activatedRoute: ActivatedRoute,
    private servicioDBConsulta: ConsultaDBService
  ) { }

  ngOnInit(): void {
    this.accion = this.activatedRoute.snapshot.params.accion;
  }

  onSubmit(){

  }

}
