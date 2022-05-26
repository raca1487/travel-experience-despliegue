import { Component, OnInit } from '@angular/core';
import { faFacebook, faGithub, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faGithub = faGithub;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTelegram = faTelegram;

  constructor() { }

  ngOnInit(): void {
  }

}
