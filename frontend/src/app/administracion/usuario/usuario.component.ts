import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioImpl } from '../models/usuario-impl';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {
  @Input() usuario: Usuario = new UsuarioImpl();
  @Output() usuarioSeleccionado = new EventEmitter<Usuario>();

  constructor() { }

  ngOnInit(): void {

  }

}
