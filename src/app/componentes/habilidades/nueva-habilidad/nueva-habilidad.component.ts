import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConsultaDBService } from 'src/app/servicios/consulta-db.service';

@Component({
  selector: 'app-nueva-habilidad',
  templateUrl: './nueva-habilidad.component.html',
  styleUrls: ['./nueva-habilidad.component.css']
})
export class NuevaHabilidadComponent implements OnInit {

  //parametros
  //accion: Agregar || Editar
  accion: string;
  id: number

  //Base Datos
  plataformas: any[] = []

  item: any = {
    habilidad:null,
    porcentaje: 50,
    hab:{
      id: 1
    }
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private consultaDBService: ConsultaDBService,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.accion = this.activatedRoute.snapshot.params.accion;
    this.id = this.activatedRoute.snapshot.params.id;

    this.getPlataformas();
  }

  getPlataformas() {
    this.consultaDBService.listar('habilidad-plataformas')
      .subscribe(plataformas => this.plataformas = plataformas);
  }

  onSubmit() {
    this.consultaDBService.nuevo('item-habilidad',this.item)
      .subscribe(
        data => {
          this.toastr.success(`Habilidad creada`, 'OK', {
            timeOut: 3000, positionClass: 'toast-top-center'
          });
          this.router.navigate(['/']);
        },
        err => {
          this.toastr.error(err.error.mensaje, 'Fail', {
            timeOut: 3000, positionClass: 'toast-top-center',
          });
          // this.router.navigate(['/']);
        }
      );
  }
}
