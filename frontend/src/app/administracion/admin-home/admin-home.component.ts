import { Component, Input, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Usuario } from '../models/usuario';
import { UsuarioImpl } from '../models/usuario-impl';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  faUser = faUser;

  constructor() { }

  ngOnInit(): void {
  }

}
