import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';

import { NgClass } from '@angular/common';
import { NgIf } from '@angular/common';
import { LanguageService } from '../../../shared/services/language.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

function stricterEmailValidator(control: AbstractControl): ValidationErrors | null {
  const email = control.value;
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/i;
  return regex.test(email) ? null : { email: true };
}


@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgIf],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss',
})

export class ContactformComponent {
  text = {
    namePlaceholder: '',
    nameError: '',
    emailPlaceholder: '',
    emailError: '',
    messagePlaceholder: '',
    messageError: '',
    privacyLabel: '',
    privacyGuidelines: '',
    privacyError: '',
    submit: '',
    success: '',
    privacyText2: '',
  };



  contactForm: FormGroup;


  constructor(private fb: FormBuilder, private languageService: LanguageService, private http: HttpClient, private router: Router) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, stricterEmailValidator]],

      message: ['', Validators.required],
      privacy: [false, Validators.requiredTrue],
    });

    this.languageService.currentLang.subscribe((lang) => {
      if (lang === 'DE') {
        this.text = {
          namePlaceholder: 'Dein Name',
          nameError: 'Dein Name ist erforderlich',
          emailPlaceholder: 'Deine E-Mail',
          emailError: 'Deine E-Mail ist erforderlich',
          messagePlaceholder: 'Deine Nachricht',
          messageError: 'Bitte gib eine Nachricht ein.',
          privacyLabel: 'Ich habe die',
          privacyGuidelines: 'Datenschutzrichtlinien',
          privacyText2: 'gelesen und stimme der Bearbeitung meiner Daten zu.',
          privacyError: 'Bitte akzeptiere die Datenschutzbestimmungen',
          submit: 'Nachricht senden',
          success: 'Danke für deine Nachricht! Ich melde mich bald zurück!'
        };
      } else {
        this.text = {
          namePlaceholder: 'Your name',
          nameError: 'Your name is required',
          emailPlaceholder: 'Your email',
          emailError: 'Your email is required',
          messagePlaceholder: 'Your message',
          messageError: 'Your message is empty.',
          privacyLabel: 'I`ve read the ',
          privacyGuidelines: 'Privacy guidelines',
          privacyText2: 'and agree to the processing of my data as outlined.',
          privacyError: 'Please accept the privacy policy',
          submit: 'Send message',
          success: "Thanks for your message! I'll respond soon!"
        };
      }
    });
  }


  submissionSuccess = false;

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const formData = this.contactForm.value;

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new URLSearchParams({
      name: formData.name,
      email: formData.email,
      message: formData.message
    }).toString();

    this.http.post('https://www.iko-dev.com/contact.php', body, {
      headers,
      responseType: 'text'
    }).subscribe({
      next: () => {
        this.submissionSuccess = true;
        this.contactForm.reset();
        setTimeout(() => this.submissionSuccess = false, 5000);
      },
      error: (error) => {
        console.error('Senden fehlgeschlagen', error);
      }
    });

  }

  navigateToPrivacy() {
    this.router.navigate(['/privacy']);
  }
}


