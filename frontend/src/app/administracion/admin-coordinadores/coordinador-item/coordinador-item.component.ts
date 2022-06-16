import { Component, Input, OnInit } from '@angular/core';
import { Coordinador } from 'src/app/experiences/models/coordinador';
import { CoordinadorImpl } from 'src/app/experiences/models/coordinador-impl';

@Component({
  selector: 'app-coordinador-item',
  templateUrl: './coordinador-item.component.html',
  styles: []
})
export class CoordinadorItemComponent implements OnInit {
  @Input() coordinador: Coordinador = new CoordinadorImpl();

  constructor() { }

  ngOnInit(): void {
  }

}
