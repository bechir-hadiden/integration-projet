import { Component, OnInit } from '@angular/core';
import { Image } from '../Model/image.model';
import { SanteService } from '../Services/sante.service';
import { Router } from '@angular/router';
import { ImageSante } from '../Model/imageSante.model';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-accueil',
  standalone: false,
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  image!: Image[];
  cuurentImage = new Image();
  images!: Image[];


  imageSante!: ImageSante[];
  cuurentImageSante = new ImageSante();
  imagesSante!: ImageSante[];

  constructor(public santeService: SanteService , private router : Router , public authService: AuthService ) {}

  ngOnInit(): void {

    this.displayImagesSante(); 
    this.displayImages(); 
  }
  onLogout() {
    this.authService.logout();
  }

  User_part()
  {
    this.router.navigate(['/plan']);
  }
  


  // chargeImage() {
  //   this.santeService.getImage(1).subscribe(
  //     (prods) => {
  //       this.image = prods.map((prod) => {
  //         if (prod.image && prod.type) {
           
  //           prod.image = `data:${prod.type};base64,${prod.image}`;
  //         } else {
  //           console.warn('Image ou type manquant pour ce produit :', prod);
  //         }
  //         return prod;
  //       });

  //       console.log('Images chargées et traitées :', this.image);
  //     },
  //     (error) => {
  //       console.error('Erreur lors du chargement des images :', error);
  //     }
  //   );
  // }



  //partie legume 

  displayImages() {

    this.santeService.listImage().subscribe(
      (prods) => {
        this.image = prods.map((prod) => {
          if (prod.image && prod.type) {
            prod.image = `data:${prod.type};base64,${prod.image}`;
          } else {
            console.warn('Image ou type manquant pour ce produit :', prod);
          }
    
          if (!prod.message) {
            prod.message = 'Message non disponible'; 
          }
    
          return prod;
        });
    
        console.log('Images chargées et traitées :', this.image);
      },
      (error) => {
        console.error('Erreur lors du chargement des images :', error);
      }
    );
  }    

  supprimerImage(img: Image) {
    if (!this.authService.isAdmin()) {
      alert('Vous n\'avez pas les droits pour supprimer cette image');
      return;
    }
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.santeService.supprimerImage(img.idImage).subscribe(() => {
        //supprimer image du tableau currentProduit.images
        const index = this.cuurentImage.images.indexOf(img, 0);
        if (index > -1) {
          this.cuurentImage.images.splice(index, 1);
        }


      });
      this.router.navigate(['/acceuil']);

    }
  
//partie fruits

displayImagesSante() {
  this.santeService.listImageSante().subscribe(
    (prods) => {
      this.imagesSante = prods.map((prod) => {
        console.log('Images après traitement prod type :', prod.type);
        console.log('Images après traitement prod name :', prod.image);
        console.log('Images après traitement prod  :', prod);


        if (prod.image && prod.type) {
          prod.image = `data:${prod.type};base64,${prod.image}`;
        } else {
          console.warn('Données image manquantes pour ce produit :', prod);
        }

        // Assurez-vous que le message est présent
        if (!prod.message) {
          prod.message = 'Message non disponible';
        }

        return prod;
      });

      console.log('Images après traitement :', this.imagesSante);
    },
    (error) => {
      console.error('Erreur lors du chargement des images :', error);
    }
  );
}

supprimerImageSante(img: ImageSante) {
  let conf = confirm("Etes-vous sûr ?");
  if (conf) {
    this.santeService.supprimerImageSante(img.idImage).subscribe(() => {
      // Supprimer image du tableau currentProduit.images
      const index = this.cuurentImageSante.images.indexOf(img, 0);
      if (index > -1) {
        this.cuurentImageSante.images.splice(index, 1);
        this.router.navigate(['/acceuil']);

      }
      // Naviguer vers la page d'accueil après la suppression
    });
  }
}


  }


  

  
  // this.santeService.listImage().subscribe(
    //   (prods) => {
    //     this.image = prods.map((prod) => {
    //       if (prod.image && prod.type) {
    //         // Générer une nouvelle propriété 'imageStr' pour chaque produit
    //         prod.imageStr = `data:${prod.type};base64,${prod.image}`;
    //       } else {
    //         console.warn('Image ou type manquant pour ce produit :', prod);
    //         // Ajouter une valeur par défaut pour éviter les erreurs
    //         prod.imageStr = 'assets/default-image.jpg';
    //       }
    //       return prod;
    //     });
  
    //     console.log('Images chargées et traitées :', this.image);
    //   },
    //   (error) => {
    //     console.error('Erreur lors du chargement des images :', error);
    //   }
    // );
 
