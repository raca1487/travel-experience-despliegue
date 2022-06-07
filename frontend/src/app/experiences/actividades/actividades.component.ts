import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faEye, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Actividad } from '../models/actividad';
import { ActividadImpl } from '../models/actividad-impl';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {
  @Input() actividad: Actividad = new ActividadImpl();
  @Output() actividadSeleccionada = new EventEmitter<Actividad>();

  @Output() actividadEliminar = new EventEmitter<Actividad>();
  @Output() actividadEditar = new EventEmitter<Actividad>();

  faEye = faEye;
  faEdit = faPenToSquare;
  faTrash = faTrashCan;

  constructor() { }

  ngOnInit(): void {
  }

  seleccionarActividad(actividad: Actividad): void {
    this.actividadSeleccionada.emit(actividad);
  }

  eliminarA(): void {
    if (confirm('Va a eliminar un Viaje, ¿está usted seguro de la operación que va a realizar?')) {
      this.actividadEliminar.emit(this.actividad);
    }
  }

  editarA(): void {
    this.actividadEditar.emit(this.actividad);
  }

}
