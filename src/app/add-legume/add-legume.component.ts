import { Component } from '@angular/core';
import { SanteService } from '../Services/sante.service';
import { Router } from '@angular/router';
import { Image } from '../Model/image.model';

@Component({
  selector: 'app-add-legume',
  standalone: false,
  
  templateUrl: './add-legume.component.html',
  styleUrl: './add-legume.component.css'
})
export class AddLegumeComponent {

  selectedFile: File | null = null; // Fichier sélectionné
  message: string = ''; // Message associé à l'image
  filename: string = ''; // Nom du fichier

  constructor(private santeService: SanteService , private router : Router) {}

  onFileSelected(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      this.filename = this.selectedFile?.name || ''; // Récupère le nom du fichier ou une chaîne vide
    }
  }
  

  uploadImage(): void {
    if (this.selectedFile && this.message.trim() !== '') {
        this.santeService.uploadImage(this.selectedFile, this.filename, this.message).subscribe(
            (response: Image) => {
                console.log('Réponse du backend :', response);
                alert('Image ajoutée avec succès !');
                this.router.navigate(['/acceuil']);
                this.resetForm();
            },
            (error) => {
                console.error('Erreur lors de l’ajout de l’image :', error);
                alert('Erreur lors de l’ajout de l’image.');
            }
        );
    } else {
        alert('Veuillez sélectionner une image et entrer un message.');
    }
}

  
  
  

  resetForm(): void {
    this.selectedFile = null;
    this.message = '';
    this.filename = '';
  }
}