import emailjs from '@emailjs/browser';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  constructor(public lang: LanguageService) {}

  private SERVICE_ID  = 'service_vh0a24p';
  private TEMPLATE_ID = 'template_yu0fk75';
  private PUBLIC_KEY  = 'z8c1ao7gvgzewB22M';

  nom = ''; email = ''; message = '';
  envoye = false; erreur = false; chargement = false;

  infos = [
    { icone: '✉️', label: 'chaima.arrouj@esprit.tn', lien: '' },
    { icone: '📞', label: '+216 94 673 370',          lien: '' },
    { icone: '📍', label: 'Tunis, Tunisie',            lien: '' },
    { icone: '💼', label: 'LinkedIn', lien: 'https://linkedin.com/in/chaima-arrouj-398113307/' },
    { icone: '🐙', label: 'GitHub',   lien: 'https://github.com/ChaimaArrouj' }
  ];

  async envoyer() {
    if (!this.nom.trim() || !this.email.trim() || !this.message.trim()) {
      alert(this.lang.t().contact_alert);
      return;
    }
    this.chargement = true; this.envoye = false; this.erreur = false;
    try {
      await emailjs.send(this.SERVICE_ID, this.TEMPLATE_ID, {
        from_name: this.nom, from_email: this.email, message: this.message,
      }, this.PUBLIC_KEY);
      this.envoye = true;
      this.nom = this.email = this.message = '';
    } catch (error) {
      this.erreur = true;
    } finally {
      this.chargement = false;
      setTimeout(() => { this.envoye = false; this.erreur = false; }, 5000);
    }
  }
}