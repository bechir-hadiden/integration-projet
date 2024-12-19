import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  userName: string = '';
  userPhotoUrl: string = 'assets/images/default-avatar.png';

  constructor( private  route :Router ,  public authService: AuthService ) { }

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

  onLogout() {
    this.authService.logout();
  }
}