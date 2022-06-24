import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faEye, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Coordinador } from 'src/app/experiences/models/coordinador';
import { CoordinadorImpl } from 'src/app/experiences/models/coordinador-impl';

@Component({
  selector: 'app-coordinadores',
  templateUrl: './coordinadores.component.html',
  styleUrls: ['./coordinadores.component.css']
})
export class CoordinadoresComponent implements OnInit {
  @Input() coordinador: Coordinador = new CoordinadorImpl();
  @Output() coordinadorSeleccionado = new EventEmitter<Coordinador>();

  @Output() coordinadorEliminar = new EventEmitter<Coordinador>();
  @Output() coordinadorEditar = new EventEmitter<Coordinador>();

  faEye = faEye;
  faEdit = faPenToSquare;
  faTrash = faTrashCan;

  constructor() { }

  ngOnInit(): void {
  }

  seleccionarCoordinador(coordinador: Coordinador): void {
    this.coordinadorSeleccionado.emit(coordinador);
  }

  eliminarC(): void {
    // if (confirm('Va a dar de baja a un Coordinador, ¿está usted seguro de la operación que va a realizar?')) {
    //   this.coordinadorEliminar.emit(this.coordinador);
    // };
    this.coordinadorEliminar.emit(this.coordinador);
  }

}
