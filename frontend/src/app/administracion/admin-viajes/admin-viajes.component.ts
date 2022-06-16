import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faEye, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Viaje } from 'src/app/experiences/models/viaje';
import { ViajeImpl } from 'src/app/experiences/models/viaje-impl';

@Component({
  selector: 'app-admin-viajes',
  templateUrl: './admin-viajes.component.html',
  styleUrls: ['./admin-viajes.component.css']
})
export class AdminViajesComponent implements OnInit {
  @Input() viaje: Viaje = new ViajeImpl();
  @Output() viajeSeleccionado = new EventEmitter<Viaje>();

  @Output() viajeEliminar = new EventEmitter<Viaje>();
  @Output() viajeEditar = new EventEmitter<Viaje>();

  faEye = faEye;
  faEdit = faPenToSquare;
  faTrash = faTrashCan;

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
