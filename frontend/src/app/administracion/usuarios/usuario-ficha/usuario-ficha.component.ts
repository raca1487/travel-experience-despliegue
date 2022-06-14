import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { UsuarioImpl } from '../../models/usuario-impl';

@Component({
  selector: 'app-usuario-ficha',
  templateUrl: './usuario-ficha.component.html',
  styles: []
})
export class UsuarioFichaComponent implements OnInit {
  @Input() usuario: Usuario = new UsuarioImpl();

  @Output() usuarioEliminar = new EventEmitter<Usuario>();
  @Output() usuarioEditar = new EventEmitter<Usuario>();

  constructor() { }

  ngOnInit(): void {

  }
  eliminar(): void {
    this.usuarioEliminar.emit(this.usuario);
  }

  editar(): void {
    this.usuarioEditar.emit(this.usuario);
  }
}
