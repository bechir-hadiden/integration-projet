import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import emailjs, { send } from '@emailjs/browser';
@Component({
  selector: 'app-mmmmm',
  standalone: false,

  templateUrl: './mmmmm.component.html',
  styleUrl: './mmmmm.component.css'
})

export class MmmmmComponent {
  contactForm: FormGroup;
  coaches: string[] = ['Coach A', 'Coach B', 'Coach C'];

  constructor(private fb: FormBuilder, private router: Router) {
    this.contactForm = this.fb.group({
      from_name: '',
      to_name: 'admin',
      from_email: '',
      sujet: '',
      message: '', // Assurez-vous que ce champ est bien initialisé
      coach: '',
    });
  }

  async send() {
    if (this.contactForm.valid) {
      try {
        emailjs.init('QhWT60xdv3oiYCVQX');
        let response = await emailjs.send("service_h1t1w3f", "template_chbljq8", {
          from_name: this.contactForm.value.from_name,
          to_name: this.contactForm.value.to_name,
          from_email: this.contactForm.value.from_email,
          sujet: this.contactForm.value.sujet,
          message: this.contactForm.value.message, // Assurez-vous que ce champ est bien envoyé
          coach: this.contactForm.value.coach,
        });
        alert('Message envoyé avec succès!');
        this.contactForm.reset();
      } catch (error) {
        console.error('Erreur:', error);
        alert('Une erreur est survenue lors de l\'envoi du message.');
      }
    }
  }
}

// export class MmmmmComponent implements OnInit, OnDestroy {
//   currentIndex = 0;
//   private autoSlideInterval: any;

//   slides = [
//     {
//       image: 'assets/5.jpeg',
//       title: 'Bechir',
//       description: "J'ai adopte naturellement le concept dalimentationconsciente ... il faut 15 à 20 minutes aux aliments pouratteindre lestomac,jai donc commence à manger pluslentement.",
//     },
//     {
//       image: 'assets/3.png',
//       title: 'Caroline',
//       description: "Maintenant, quand mes amis se mettent à la course à pied et ressentent de la frustration, je leur dis de s accrocher car ils finiront par aller plus vite."
//     },
//     {
//       image: 'assets/2.jpg',
//       title: 'Soumaya',
//       description: 'Un immense merci à mon coach pour son soutien infaillible, ses précieux conseils et sa capacité à me motiver à chaque étape. Grâce à lui, jai pu repousser mes limites et atteindre mes objectifs !"'
//     },
    
//     {
//       image: 'assets/6.jpg',
//       title: 'lotfi',
//       description: "Un grand merci à mon coach de musculation pour son expertise, sa patience et sa motivation constante. Grâce à ses programmes personnalisés et ses encouragements, j'ai pu progresser et atteindre mes objectifs physiques !"
//     },
    
//   ];


//   ngOnInit(): void {
//     // Démarrer le défilement automatique
//     this.startAutoSlide();
//   }

//   ngOnDestroy(): void {
//     // Arrêter le défilement automatique quand le composant est détruit
//     this.stopAutoSlide();
//   }

//   startAutoSlide(): void {
//     this.autoSlideInterval = setInterval(() => {
//       this.nextSlide();
//     }, 3000); // 3000ms = 3 secondes
//   }

//   stopAutoSlide(): void {
//     if (this.autoSlideInterval) {
//       clearInterval(this.autoSlideInterval);
//     }
//   }

//   nextSlide(): void {
//     this.currentIndex = (this.currentIndex + 1) % this.slides.length;
//   }

//   previousSlide(): void {
//     this.currentIndex = this.currentIndex === 0 ?
//       this.slides.length - 1 :
//       this.currentIndex - 1;
//   }

//   // Optionnel : Arrêter le défilement au survol
//   onMouseEnter(): void {
//     this.stopAutoSlide();
//   }

//   // Optionnel : Reprendre le défilement quand la souris quitte le slider
//   onMouseLeave(): void {
//     this.startAutoSlide();
//   }
// }