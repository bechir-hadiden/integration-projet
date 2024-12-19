import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SanteService } from '../Services/sante.service';
import { ImageSante } from '../Model/imageSante.model';

@Component({
  selector: 'app-add-sante',
  standalone: false,
  templateUrl: './add-sante.component.html',
  styleUrl: './add-sante.component.css'
})
export class AddSanteComponent {
  selectedFilee: File | null = null; // Fichier sélectionné
  message: string = ''; // Message associé à l'image
  filename: string = ''; // Nom du fichier

  constructor(private santeService: SanteService , private router : Router) {}

  onFileSelectedSante(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      this.selectedFilee = event.target.files[0];
      this.filename = this.selectedFilee?.name || ''; 
    }
  }
  

  uploadImageSante(): void {
    if (this.selectedFilee && this.message.trim() !== '') {
        this.santeService.uploadImageSante(this.selectedFilee, this.filename, this.message).subscribe(
            (response: ImageSante) => {
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
    console.log("inchalha zina ")
}

  
  resetForm(): void {
    this.selectedFilee = null;
    this.message = '';
    this.filename = '';
  }
}