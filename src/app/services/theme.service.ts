import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  isDark = signal<boolean>(true);

  basculer() {
    this.isDark.set(!this.isDark());
    document.body.setAttribute('data-theme', this.isDark() ? 'dark' : 'light');
  }

  init() {
    document.body.setAttribute('data-theme', 'dark');
  }
}