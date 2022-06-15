import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/administracion/models/usuario';
import { UsuarioService } from 'src/app/administracion/service/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarios: Usuario[] = [];
  nombreUsuario: string = "";
  password: string = "";
  tipoUsuario: string = "";

  static logged: boolean = false;
  static admin: boolean = false;

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe((response) =>
          (this.usuarios = this.usuarioService.extraerUsuarios(response))
      );
  }

  comprobarLogging(): void {
    this.ngOnInit();
    for (let usuario of this.usuarios) {
      if (usuario.nombre === this.nombreUsuario) {
        if (usuario.password === this.password) {
          HomeComponent.logged = true;
          this.tipoUsuario =
            usuario.tipo === 'administrador' ? 'administrador' : 'guest';
            HomeComponent.admin = usuario.tipo === 'administrador';
        }
      }
    }
    this.router.navigate([`/administracion/home`]);
  }

  cerrarSesion(): void {
    this.ngOnInit();
    HomeComponent.logged = false;
    HomeComponent.admin = false;
    this.nombreUsuario = '';
    this.password = '';
    this.tipoUsuario = '';
  }

  getLogged(): boolean {
    return HomeComponent.logged;
  }

}
