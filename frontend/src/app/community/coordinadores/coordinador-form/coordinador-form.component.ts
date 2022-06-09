import { Component, OnInit } from '@angular/core';
import { Coordinador } from 'src/app/experiences/models/coordinador';
import { CoordinadorImpl } from 'src/app/experiences/models/coordinador-impl';

@Component({
  selector: 'app-coordinador-form',
  templateUrl: './coordinador-form.component.html',
  styleUrls: ['./coordinador-form.component.css']
})
export class CoordinadorFormComponent implements OnInit {
  coordinador: Coordinador = new CoordinadorImpl();

  constructor() { }

  ngOnInit(): void {
  }

}
