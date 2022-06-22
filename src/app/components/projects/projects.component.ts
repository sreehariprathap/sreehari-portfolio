import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCodeFork, faDisplay } from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true,
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [CommonModule,FontAwesomeModule],
})
export class ProjectsComponent implements OnInit {
  faCodeFork = faCodeFork;
  faDisplay = faDisplay;
  projects = [
    {
      name: 'Hulu',
      technologies: ['next.js', 'react', 'typescript', 'tailwindcss'],
      github: 'https://github.com/sreehariprathap/hulu',
      live: '',
      imgSource:
        'https://logolook.net/wp-content/uploads/2021/08/Hulu-Logo-2017.png',
      description:
        'hulu is a clone of famous streaming app, uses tmdb api for fetching latest movies and displaying them',
    },
    {
      name: 'Facebook',
      technologies: ['next.js', 'react', 'typescript', 'tailwindcss'],
      github: 'https://github.com/sreehariprathap/facebook',
      live: '',
      imgSource: 'assets/projects/60d5dbf40f3e87001efa16c1.png',
      description:
        'facebook is a clone of famous social media app, can be used to make posts',
    },
    {
      name: 'Netflix',
      technologies: ['next.js', 'react', 'typescript'],
      github: '',
      live: '',
      imgSource:
        'http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png',
      description:
        'netflix is a clone of famous streaming app, netflix clone contains login with firebase authentication',
    },
    {
      name: 'Care',
      technologies: ['Angular', 'asp.net', 'typescript', 'bootstrap'],
      github: 'https://github.com/sreehari4experion/careClinicManagementSystem',
      live: '',
      imgSource: 'assets/projects/Care.png',
      description:
        'care is a clinic management system app with portals for receptionist, doctor, pharmacist, admin,lab technician.',
    },
    {
      name: 'sleepwell',
      technologies: ['HTML', 'CSS', 'javascript', 'bootstrap'],
      github: 'https://github.com/sreehariprathap/Sleep-Well',
      live: 'https://sreehariprathap.github.io/Sleep-Well/',
      imgSource: 'assets/projects/Sleepwell (2).png',
      description: 'A static web page for a mattress company',
    },
    {
      name: 'pig game',
      technologies: ['HTML', 'CSS', 'javascript'],
      github: 'https://github.com/sreehariprathap/pig-game-DOM-learning',
      live: 'https://sreehariprathap.github.io/pig-game-DOM-learning',
      imgSource: 'assets/projects/logo-4303138_1280.png',
      description: 'A game developed as part of my learning',
    },
    {
      name: 'guess game',
      technologies: ['HTML', 'CSS', 'javascript'],
      github: 'https://github.com/sreehariprathap/Guess-game-retro',
      live: 'https://github.com/sreehariprathap/Guess-game-retro',
      imgSource:
        'assets/projects/d8sdlty-5f3d4212-dff0-4243-98ef-3c9d88c16a9a.png',
      description: 'A game developed as part of my learning',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
