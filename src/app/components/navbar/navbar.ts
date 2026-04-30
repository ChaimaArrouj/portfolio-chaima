import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  constructor(public lang: LanguageService, public theme: ThemeService) {}

  get links() {
    const t = this.lang.t();
    return [
      { label: t.nav_home,     id: 'home'     },
      { label: t.nav_about,    id: 'about'    },
      { label: t.nav_services, id: 'services' },
      { label: t.nav_skills,   id: 'skills'   },
      { label: t.nav_projects, id: 'projects' },
      { label: t.nav_contact,  id: 'contact'  },
    ];
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}