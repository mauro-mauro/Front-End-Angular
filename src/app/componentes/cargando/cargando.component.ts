import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/servicios/spinner.service';

@Component({
  selector: 'app-cargando',
  templateUrl: './cargando.component.html',
  styleUrls: ['./cargando.component.css']
})
export class CargandoComponent implements OnInit {
  isLoading = this.spinnerService.isLoading;

  constructor(private spinnerService: SpinnerService) { }

  ngOnInit(): void {
  }

}
