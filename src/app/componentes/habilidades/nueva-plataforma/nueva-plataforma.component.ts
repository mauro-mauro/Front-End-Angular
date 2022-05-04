import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConsultaDBService } from 'src/app/servicios/consulta-db.service';

@Component({
  selector: 'app-nueva-plataforma',
  templateUrl: './nueva-plataforma.component.html',
  styleUrls: ['./nueva-plataforma.component.css']
})
export class NuevaPlataformaComponent implements OnInit {

  //parametros
  //accion: Agregar || Editar
  accion: string;
  id: number

  //Base Datos
  plataformas: any[] = []

  nuevaPlataforma: any = {
    plataforma: ""
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
    this.consultaDBService.listar('plataforma')
      .subscribe(plataformas => {
        this.plataformas = plataformas;
        console.log(plataformas);
      });
  }

  onSubmit() {
    this.consultaDBService.nuevo('plataforma', this.nuevaPlataforma)
      .subscribe(
        data => {
          this.toastr.success(`Plataforma creada`, 'OK', {
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
