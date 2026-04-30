import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  constructor(public lang: LanguageService) {}

  images = ['project1.jpg','project2.jpg','project3.jpg','project4.jpg','project5.jpg','project6.jpg'];
  gradients = [
    'linear-gradient(135deg, #00d4ff, #a855f7)',
    'linear-gradient(135deg, #00d4ff, #5be217)',
    'linear-gradient(135deg, #a855f7, #f472b6)',
    'linear-gradient(135deg, #f472b6, #00d4ff)',
    'linear-gradient(135deg, #00d4ff, #34d399)',
    'linear-gradient(135deg, #34d399, #a855f7)',
  ];
  tags = [
    ['Spring Boot','Angular','Python','Flask','ML','NLP'],
    ['Jenkins','Docker','SonarQube','Prometheus','Grafana','Nexus'],
    ['Spring Boot','Angular','FlutterFlow','JWT'],
    ['.Net','Angular','Flask','Python'],
    ['Spring Boot','Mobile','Docker','Jira'],
    ['Java','Symfony'],
  ];

  expandedProjects: { [key: number]: boolean } = {};

  toggleDescription(index: number) {
    this.expandedProjects[index] = !this.expandedProjects[index];
  }

  isLong(description: string): boolean {
    return description.length > 150;
  }

  getDescription(description: string, index: number): string {
    if (!this.isLong(description) || this.expandedProjects[index]) {
      return description;
    }
    return description.slice(0, 150) + '...';
  }

  onImgError(event: any, gradient: string) {
    event.target.style.display = 'none';
    event.target.parentElement.style.background = gradient;
  }
  githubLinks = [
  'https://github.com/ChaimaArrouj/plateforme-formation',  // projet 1
  'https://github.com/ChaimaArrouj/devops-pipelines',      // projet 2
  'https://github.com/ChaimaArrouj/DanceScape-Final',      // projet 3
  'https://github.com/ChaimaArrouj/diagnostic-medical',    // projet 4
  'https://github.com/ChaimaArrouj/sabeel',                // projet 5 ← sabeel
  'https://github.com/ChaimaArrouj/ecocycle',              // projet 6
];
}