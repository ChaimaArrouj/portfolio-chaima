import { Component, HostListener } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { About } from "./components/about/about";
import { Services } from "./components/services/services";
import { Skills } from "./components/skills/skills";
import { Projects } from "./components/projects/projects";
import { Contact } from "./components/contact/contact";
import { ThemeService } from './services/theme.service';
import { FooterComponent } from './components/footer/footer';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, About, Services, Skills, Projects, Contact, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  showBtn = false;

  constructor(private theme: ThemeService) {}

  ngOnInit() {
    this.theme.init();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.showBtn = window.scrollY > 400;
  }

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}