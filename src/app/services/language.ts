import { Injectable, signal, computed } from '@angular/core';
import { TRANSLATIONS } from './translations';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  langue = signal<'fr' | 'en'>('fr');
  t = computed(() => TRANSLATIONS[this.langue()]);
  basculer() {
    this.langue.set(this.langue() === 'fr' ? 'en' : 'fr');
  }
}