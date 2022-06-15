import { Component, OnInit } from '@angular/core';
import { faFacebook, faGithub, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer-principal',
  templateUrl: './footer-principal.component.html',
  styleUrls: ['./footer-principal.component.css']
})
export class FooterPrincipalComponent implements OnInit {

  faGithub = faGithub;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTelegram = faTelegram;

  constructor() { }

  ngOnInit(): void {
  }

}
