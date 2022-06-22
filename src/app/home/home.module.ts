import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { AboutComponent } from '../components/about/about.component';
import { MobileNavComponent } from '../components/mobile-nav/mobile-nav.component';
import { SkillsComponent } from '../components/skills/skills.component';
import { ExperienceComponent } from '../components/experience/experience.component';
import { EducationComponent } from '../components/education/education.component';
import { ProjectsComponent } from '../components/projects/projects.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, NavbarComponent,AboutComponent,MobileNavComponent,SkillsComponent,ExperienceComponent,EducationComponent, ProjectsComponent,],
})
export class HomeModule {}
