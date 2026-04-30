import { Component, OnInit, OnDestroy, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class HeroComponent implements OnInit, OnDestroy {
  currentTitle = '';
  private titleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timer: any;

  constructor(public lang: LanguageService) {
    effect(() => {
      this.lang.langue();
      this.titleIndex = 0;
      this.charIndex = 0;
      this.isDeleting = false;
      clearTimeout(this.timer);
      this.typeEffect();
    });
  }

  ngOnInit() {}

  typeEffect() {
    const titles = this.lang.t().hero_titles;
    const current = titles[this.titleIndex % titles.length];
    if (this.isDeleting) {
      this.currentTitle = current.substring(0, this.charIndex--);
    } else {
      this.currentTitle = current.substring(0, this.charIndex++);
    }
    if (!this.isDeleting && this.charIndex === current.length + 1) {
      this.isDeleting = true;
      this.timer = setTimeout(() => this.typeEffect(), 1500);
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.titleIndex = (this.titleIndex + 1) % titles.length;
      this.timer = setTimeout(() => this.typeEffect(), 400);
    } else {
      this.timer = setTimeout(() => this.typeEffect(), this.isDeleting ? 60 : 100);
    }
  }

  ngOnDestroy() { clearTimeout(this.timer); }

  scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}