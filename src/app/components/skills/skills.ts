import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  constructor(public lang: LanguageService) {}

  // Index actif (0 = premier onglet)
  activeIndex = 0;

  // Icones des catégories — fixes, pas besoin de traduire
  catIcones = ['</>', '⚙️', '🚀', '🛠️', '📐'];

  // Compétences — fixes, les noms techniques ne se traduisent pas
  toutesCompetences: { nom: string; icone: string; couleur: string }[][] = [
    // [0] Langages / Languages
    [
      { nom: 'Java',       icone: '☕', couleur: '#f89820' },
      { nom: 'Python',     icone: '🐍', couleur: '#3776ab' },
      { nom: 'JavaScript', icone: '𝐉𝐒', couleur: '#f7df1e' },
      { nom: 'HTML / CSS', icone: '🌐', couleur: '#e44d26' },
      { nom: 'C',          icone: '©️',  couleur: '#00599c' },
    ],
    // [1] Frameworks
    [
      { nom: 'Spring Boot', icone: '🍃', couleur: '#6db33f' },
      { nom: 'Angular',     icone: '🅰️', couleur: '#dd0031' },
      { nom: 'Symfony',     icone: '🎼', couleur: '#aaaaaa' },
      { nom: 'Flask',       icone: '🧪', couleur: '#aaaaaa' },
      { nom: '.Net',        icone: '🔷', couleur: '#512bd4' },
    ],
    // [2] DevOps
    [
      { nom: 'Docker',     icone: '🐳', couleur: '#2496ed' },
      { nom: 'Kubernetes', icone: '☸️', couleur: '#326ce5' },
      { nom: 'Jenkins',    icone: '🤖', couleur: '#d33833' },
      { nom: 'Git',        icone: '🌿', couleur: '#f05032' },
      { nom: 'Sonar',      icone: '📊', couleur: '#4e9bcd' },
      { nom: 'Grafana',    icone: '📈', couleur: '#f46800' },
      { nom: 'Prometheus', icone: '🔥', couleur: '#e6522c' },
      { nom: 'Nexus',      icone: '📦', couleur: '#00b0e7' },
    ],
    // [3] Outils / Tools
    [
      { nom: 'Jira',  icone: '📋', couleur: '#0052cc' },
      { nom: 'Figma', icone: '🎨', couleur: '#f24e1e' },
    ],
    // [4] Méthodologies / Methodologies
    [
      { nom: 'Agile (Scrum)', icone: '⚡', couleur: '#a855f7' },
    ],
  ];

  // Retourne les labels traduits depuis le service
  get categories() {
    return this.lang.t().skills_cats.map((label: string, i: number) => ({
      label,
      icone: this.catIcones[i]
    }));
  }

  // Retourne les compétences de l'onglet actif
  get competencesAffichees() {
    return this.toutesCompetences[this.activeIndex] || [];
  }

  // Active un onglet par index (pas par label, pour éviter le problème fr/en)
  changerCategorie(index: number) {
    this.activeIndex = index;
  }
}