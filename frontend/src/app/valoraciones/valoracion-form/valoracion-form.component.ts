import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Valoracion } from 'src/app/experiences/models/valoracion';
import { ValoracionImpl } from 'src/app/experiences/models/valoracion-impl';
import { ValoracionService } from '../service/valoracion.service';

@Component({
  selector: 'app-valoracion-form',
  templateUrl: './valoracion-form.component.html',
  styleUrls: ['./valoracion-form.component.css']
})
export class ValoracionFormComponent implements OnInit {
  @Input() valoracion: Valoracion = new ValoracionImpl();

  constructor(private valoracionService: ValoracionService, private router: Router) { }

  ngOnInit(): void {
  }

  registrar(): void {
    this.valoracionService.create(this.valoracion).subscribe((response) => {
      this.router.navigate(['/experiences']);
    });
  }

}
