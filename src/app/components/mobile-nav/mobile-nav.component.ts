import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faFeather,
  faLightbulb,
  faUserAstronaut,
  faSun,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true,
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss'],
  imports: [FontAwesomeModule],
})
export class MobileNavComponent implements OnInit {
  faFeather = faFeather;
  faLightbulb = faLightbulb;
  faUserAstronaut = faUserAstronaut;
  constructor() {}

  ngOnInit(): void {}
}
