import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExperienciaEducacion } from 'src/app/modelos/experiencia-educacion';
import { ConsultaDBService } from 'src/app/servicios/consulta-db.service';

@Component({
  selector: 'app-editar-experiencia-educacion',
  templateUrl: './editar-experiencia-educacion.component.html',
  styleUrls: ['./editar-experiencia-educacion.component.css']
})
export class EditarExperienciaEducacionComponent implements OnInit {

  //parametros
  accion:string;

  //propiedades
  ocupacion:string;
  lugar:string;
  periodo:string;
  descripcion:string;
  url:string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private servicioDBConsulta: ConsultaDBService,
    private toastr: ToastrService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.accion= this.activatedRoute.snapshot.params.accion;
  }

  onSubmit(){
    const experienciaEducacion = new ExperienciaEducacion(this.ocupacion, this.lugar,
                                              this.periodo, this.descripcion, this.url);
    this.servicioDBConsulta.guardarExperiencia(experienciaEducacion).subscribe(
      data => {
        this.toastr.success('Experiencia Creada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error("err.error.mensaje", 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        // this.router.navigate(['/']);
      }
    );
  }

}
