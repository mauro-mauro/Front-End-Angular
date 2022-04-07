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
  id: number
  accion: string;

  habilidad: any;

  bannerActivo: boolean = false;

  datosEditar: any = {
    id: null,
    habilidad: null,
    porcentaje: null
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private servicioDBConsulta: ConsultaDBService
  ) { }

  ngOnInit(): void {
    this.accion = this.activatedRoute.snapshot.params.accion;
    this.id = this.activatedRoute.snapshot.params.id;
    this.getHabilidades();
  }

  onSubmit() {
    console.log(this.habilidad);
  }

  getHabilidades(): void {
    this.servicioDBConsulta.buscarPorId('habilidad', this.id)
      .subscribe((habilidad: any) => this.habilidad = habilidad);
  }

  onEliminar(id: number) {
    this.servicioDBConsulta.borrar('item-habilidad', id).subscribe(
      data => {
        this.getHabilidades();
      }

    );
  }

  onEditar(id: number, habilidad: string, porcentaje: number) {
    this.datosEditar.id = id;
    this.datosEditar.habilidad = habilidad;
    this.datosEditar.porcentaje = porcentaje;
    this.bannerActivo = true;
  }

  onAceptarEdicion(id: number) {
    this.servicioDBConsulta.editar('item-habilidad', this.datosEditar, id).subscribe(
      data => {
        this.getHabilidades();
      }
    );
    this.bannerActivo = false;
  }
}
