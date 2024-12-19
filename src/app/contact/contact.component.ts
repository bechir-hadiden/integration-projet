import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm: FormGroup;
  coaches: string[] = ['Coach A', 'Coach B', 'Coach C']; // Liste des coachs disponibles

  constructor(private fb: FormBuilder, private router: Router) {
      this.contactForm = this.fb.group({
          from_name: '',
          to_name: 'admin',
          from_email: '',
          sujet: '',
          subjectif: '',
          message: '',
          coach: '', // Ajoutez le champ coach
      });
  }

  async send() {
    emailjs.init('QhWT60xdv3oiYCVQX');
    let response = await emailjs.send("service_h1t1w3f", "template_chbljq8", {
        from_name: this.contactForm.value.from_name,
        to_name: this.contactForm.value.to_name,
        from_email: this.contactForm.value.from_email,
        sujet: this.contactForm.value.sujet,
        message: this.contactForm.value.message,
        coach: this.contactForm.value.coach, // Assurez-vous que ce champ est bien envoyé
    });
    alert('Successful');
    this.contactForm.reset();
}
}