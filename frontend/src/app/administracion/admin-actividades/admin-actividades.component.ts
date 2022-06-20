import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faEye, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Actividad } from 'src/app/experiences/models/actividad';
import { ActividadImpl } from 'src/app/experiences/models/actividad-impl';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-admin-actividades',
  templateUrl: './admin-actividades.component.html',
  styleUrls: ['./admin-actividades.component.css']
})
export class AdminActividadesComponent implements OnInit {
  @Input() actividad: Actividad = new ActividadImpl();
  @Output() actividadSeleccionada = new EventEmitter<Actividad>();

  @Output() actividadEliminar = new EventEmitter<Actividad>();
  @Output() actividadEditar = new EventEmitter<Actividad>();

  faEye = faEye;
  faEdit = faPenToSquare;
  faTrash = faTrashCan;

  constructor(private activateRouter: ActivatedRoute) { }

  ngOnInit(): void {
  }

  seleccionarActividad(actividad: Actividad): void {
    this.actividadSeleccionada.emit(actividad);
  }

  eliminarA(): void {
    if (confirm('Va a eliminar una Actividad, ¿está usted seguro de la operación que va a realizar?')) {
      this.actividadEliminar.emit(this.actividad);
    }
  }

}
