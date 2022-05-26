import { Component, OnInit } from '@angular/core';
import { Coordinador } from '../../models/coordinador';
import { CoordinadorImpl } from '../../models/coordinador-impl';

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
