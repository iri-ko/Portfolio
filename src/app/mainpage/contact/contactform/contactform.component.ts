import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';
import { NgClass } from '@angular/common';
import { NgIf } from '@angular/common';
import { LanguageService } from '../../../shared/services/language.service';

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
    success: ''
  };



  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private languageService: LanguageService) {
  this.contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
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
        privacyLabel: 'Ich akzeptiere die',
        privacyGuidelines: 'Datenschutzrichtlinien',
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
        privacyLabel: 'I accept the',
        privacyGuidelines: 'Privacy guidelines',
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

    this.submissionSuccess = true;
    console.log('submitted');

    // Optional: Reset form after a short delay
    setTimeout(() => {
      this.contactForm.reset();
      this.submissionSuccess = false;
    }, 5000);
  }
}


