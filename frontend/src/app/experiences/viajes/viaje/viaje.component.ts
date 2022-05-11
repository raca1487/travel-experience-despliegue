import { Component, OnInit } from '@angular/core';
import { faPlaneUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.component.html',
  styleUrls: ['./viaje.component.css']
})
export class ViajeComponent implements OnInit {

  faPlaneUp = faPlaneUp;

  constructor() { }

  ngOnInit(): void {
  }

}
