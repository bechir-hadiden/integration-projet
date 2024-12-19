import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Question } from '../Model/question.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionnaire',
  standalone: false,
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent {
  currentStep = 0;
  formData: any = {
    prenom: '',
    sexe: '',
    dateNaissance: '',
    pays: 'Tunisie',
    objectifs: [],
    niveauActivite: '',
    obstacles: []
  };

  constructor(private router: Router) {}


  questions: Question[] = [
    {
      id: 1,
      title: 'Quel est votre prénom ?',
      subtitle: 'Nous sommes heureux de vous compter parmi nous. Apprenons à mieux vous connaître.',
      type: 'text',
      required: true
    },
    {
      id: 2,
      title: 'Veuillez sélectionner votre sexe pour que nous puissions calculer vos besoins caloriques.',
      type: 'radio',
      options: ['Homme', 'Femme'],
      required: true
    },
    {
      id: 3,
      title: 'Merci ! Intéressons-nous maintenant à vos objectifs.',
      subtitle: 'Sélectionnez jusqu\'à 3 éléments qui sont importants pour vous, dont un objectif de poids.',
      type: 'buttons',
      options: [
        'Perdre du poids',
        'Maintenir poids',
        'Prendre du poids',
        'Me muscler',
        'Modifier mon régime alimentaire',
        'Gérer mon stress',
        'Augmenter le nombre de pas'
      ]
    },
    {
      id: 4,
      title: 'Quel est votre niveau d\'activité de base ?',
      subtitle: 'Sans compter les entraînements (ils sont calculés séparément)',
      type: 'select',
      options: [
        'Pas très actif',
        'Modérément actif',
        'Actif',
        'Très actif'
      ]
    },
    {
      id: 5,
      title: 'Dans le passé, quels ont été les obstacles à la perte de poids que vous avez rencontrés ?',
      subtitle: 'Sélectionnez toutes les réponses qui s\'appliquent.',
      type: 'buttons',
      options: [
        'Manque de temps',
        'Le régime était trop difficile à suivre',
        'Je ne prenais pas de plaisir à manger',
        'Difficulté à faire des choix alimentaires',
        'Repas et événements sociaux',
        'Fringales',
        'Progrès insuffisants'
      ]
    }
  ];

  nextStep() {
    if (this.currentStep < this.questions.length - 1) {
      this.currentStep++;
    } else {
      this.terminer();
    }
  }

  previousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  terminer() {
    console.log('Questionnaire terminé !', this.formData);
    this.router.navigate(['/plan']);
  }

  selectOption(option: string, questionId: number ) {
    if (questionId === 3) {
      if (!this.formData.objectifs.includes(option)) {
        if (this.formData.objectifs.length < 3) {
          this.formData.objectifs.push(option);
        }
      } else {
        this.formData.objectifs = this.formData.objectifs.filter((item: string) => item !== option);
      }
    } else if (questionId === 5) {
      if (!this.formData.obstacles.includes(option)) {
        this.formData.obstacles.push(option);
      } else {
        this.formData.obstacles = this.formData.obstacles.filter((item: string) => item !== option);
      }
    }
  }

  isOptionSelected(option: string, questionId: number): boolean {
    if (questionId === 3) {
      return this.formData.objectifs.includes(option);
    } else if (questionId === 5) {
      return this.formData.obstacles.includes(option);

    }
    return false;
  }
}