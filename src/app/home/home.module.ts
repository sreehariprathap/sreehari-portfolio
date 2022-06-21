import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { AboutComponent } from '../components/about/about.component';
import { MobileNavComponent } from '../components/mobile-nav/mobile-nav.component';
import { SkillsComponent } from '../components/skills/skills.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, NavbarComponent,AboutComponent,MobileNavComponent,SkillsComponent],
})
export class HomeModule {}
