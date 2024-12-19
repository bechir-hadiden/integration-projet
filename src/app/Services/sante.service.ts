import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Image } from '../Model/image.model';
import { Observable } from 'rxjs';
import { ImageSante } from '../Model/imageSante.model';


interface StatistiquesSante {
  id: number;
  pasQuotidiens: number;
  caloriesBrulees: number;
  minutesExercice: number;
  frequenceCardiaque: number;
  date: string;
  userId: number;
}


@Injectable({
  providedIn: 'root'
})
export class SanteService {

  api_imageSante: string = "http://localhost:8089/projet/api/image/sante";
  api_image: string = "http://localhost:8089/projet/api/image";
  api_allImage: string = "http://localhost:8089/projet/api/image/getAllImages";
  api_allImagesante: string = "http://localhost:8089/projet/api/image/sante/getAllImagesSante";

  constructor( private http: HttpClient) { }



  getImage(id: number)
  {
    const url = `${this.api_image}/getImages/${id}`;
    return this.http.get<Image[]>(url);
    
  }

  listImage()
  {

    const url = `${this.api_allImage}`;
    return this.http.get<Image[]>(url);

  }
  uploadImage(file: File, filename: string, message: string): Observable<Image> {
    const imageFormData = new FormData();
    imageFormData.append('image', file, filename); // Ajoutez le fichier image
    imageFormData.append('message', message); // Ajoutez le message ici
    const url = `${this.api_image + '/upload'}`;
    return this.http.post<Image>(url, imageFormData);
}



supprimerImage(id : number) {
  const url = `${this.api_image}/delete/${id}`;
  return this.http.delete(url);
  }

//partie image sante 


  listImageSante()
  {
    const url = `${this.api_allImagesante}`;
    console.log( this.api_allImagesante , " affichge") 

    return this.http.get<ImageSante[]>(url) ;   

  }


  uploadImageSante(file: File, filename: string, message: string): Observable<ImageSante> {
    const imageFormData = new FormData();
    imageFormData.append('image', file, filename); // Ajoutez le fichier image
    imageFormData.append('message', message); // Ajoutez le message ici
    const url = `${this.api_imageSante + '/uploadSante'}`;
    return this.http.post<ImageSante>(url, imageFormData);
}

  supprimerImageSante(id : number) {
  const url = `${this.api_image}/sante/delete/${id}`;
  return this.http.delete(url);
  }
  


  getStatistiquesUtilisateur(userId: number): Observable<any> {
    return this.http.get(`${this.api_allImage}/utilisateur/${userId}`);
  }

  ajouterStatistiques(stats: any): Observable<any> {
    return this.http.post(this.api_image, stats);
}
}

