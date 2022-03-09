import { Component, OnInit, Output } from '@angular/core';
import { ITEMS, ITEMS_EDUCACION } from './item';
import { ConsultaDBService } from './servicios/consulta-db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
  }

}
