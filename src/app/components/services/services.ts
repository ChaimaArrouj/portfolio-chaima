import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  constructor(public lang: LanguageService) {}

  // Données fixes qui ne se traduisent pas
  icones    = ['💻', '🎨', '⚙️', '🤖'];
  gradients = [
    'linear-gradient(135deg, #00c9a7, #00d4ff)',
    'linear-gradient(135deg, #6366f1, #a855f7)',
    'linear-gradient(135deg, #f472b6, #a855f7)',
    'linear-gradient(135deg, #a855f7, #6366f1)',
  ];
  tags = ['Angular & Spring Boot', 'UI/UX', 'Docker & Kubernetes', 'IA & ML'];

  // Données traduites combinées avec les données fixes
  get services() {
    return this.lang.t().services.map((s: any, i: number) => ({
      icone:    this.icones[i],
      gradient: this.gradients[i],
      tag:      this.tags[i],
      titre:    s.titre,
      description: s.description,
    }));
  }
}