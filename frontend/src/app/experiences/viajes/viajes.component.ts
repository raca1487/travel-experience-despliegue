import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faEye, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Viaje } from '../models/viaje';
import { ViajeImpl } from '../models/viaje-impl';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.css']
})
export class ViajesComponent implements OnInit {
  @Input() viaje: Viaje = new ViajeImpl();
  @Output() viajeSeleccionado = new EventEmitter<Viaje>();

  @Output() viajeEliminar = new EventEmitter<Viaje>();
  @Output() viajeEditar = new EventEmitter<Viaje>();

  faEye = faEye;
  faEdit = faPenToSquare;
  faTrash = faTrashCan;

  static logged: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  seleccionarViaje(viaje: Viaje): void {
    this.viajeSeleccionado.emit(viaje);
  }

  eliminarV(): void {
    if (confirm('Va a eliminar un Viaje, ¿está usted seguro de la operación que va a realizar?')) {
      this.viajeEliminar.emit(this.viaje);
    }
  }

}
