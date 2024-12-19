import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  isLoggedIn: boolean = false;
  userName: string = '';
  userPhotoUrl: string = 'assets/images/default-avatar.png';

  constructor() { }

  ngOnInit(): void {
    // Ici vous pouvez vérifier si l'utilisateur est connecté
    // et charger ses informations depuis votre service d'authentification
  }

  login() {
    // Implémenter la logique de connexion
    console.log('Login clicked');
  }

  register() {
    // Implémenter la logique d'inscription
    console.log('Register clicked');
  }

  logout() {
    // Implémenter la logique de déconnexion
    console.log('Logout clicked');
  }
}