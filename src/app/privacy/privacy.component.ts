import { Component } from '@angular/core';
import { LanguageService } from '../shared/services/language.service';

@Component({
  selector: 'app-privacy',
  imports: [],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {
  currentLang: 'EN' | 'DE' = 'EN';

  text = {
    header: '',
    intro: '',
    overview: '',
    legal: '',
    security: '',
    storage: '',
    rights: '',
    hosting: '',
    contact: ''
  };

  constructor(private languageService: LanguageService) {
    this.languageService.currentLang.subscribe((lang) => {
      this.currentLang = lang;

      if (lang === 'DE') {
        this.text = {
          header: 'Datenschutzerklärung',
          intro: 'Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen Daten wir zu welchen Zwecken und in welchem Umfang verarbeiten...',
          overview: 'Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen...',
          legal: 'Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten...',
          security: 'Wir treffen technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten...',
          storage: 'Wir löschen personenbezogene Daten gemäß den gesetzlichen Bestimmungen, sobald die zugrundeliegenden Einwilligungen widerrufen werden...',
          rights: 'Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben...',
          hosting: 'Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste zur Verfügung stellen zu können...',
          contact: 'Bei der Kontaktaufnahme mit uns verarbeiten wir die Angaben der anfragenden Personen, soweit dies zur Beantwortung der Anfragen erforderlich ist...'
        };
      } else {
        this.text = {
          header: 'Privacy Policy',
          intro: 'This privacy policy explains what types of personal data we process, for what purposes, and to what extent. It applies to all our data processing activities, both within our website and external platforms.',
          overview: 'The following is an overview of the types of data we process, why we process it, and which individuals may be affected.',
          legal: 'Below you’ll find the relevant legal bases under the GDPR for processing personal data. Additional national regulations may also apply depending on your jurisdiction.',
          security: 'We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk...',
          storage: 'We delete personal data in accordance with legal requirements, as soon as the underlying consent is withdrawn or the data is no longer needed...',
          rights: 'You have several rights under the GDPR, including access, correction, deletion, objection, and data portability...',
          hosting: 'We process user data to provide our online services, including IP addresses required to deliver content to user devices...',
          contact: 'If you contact us (e.g. via contact form or email), we process the data you provide to respond to your inquiry...'
        };
      }
    });
  }
}
