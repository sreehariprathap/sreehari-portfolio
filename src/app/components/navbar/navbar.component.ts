import { Component, OnInit } from '@angular/core';
import { faFeather,faLightbulb,faUserAstronaut,faSun,faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [FontAwesomeModule],
})
export class NavbarComponent implements OnInit {
  faFeather = faFeather;
  faLightbulb = faLightbulb;
  faUserAstronaut = faUserAstronaut;
  faSun = faSun;
  faMoon = faMoon;
  constructor() {}

  ngOnInit(): void {}
}
