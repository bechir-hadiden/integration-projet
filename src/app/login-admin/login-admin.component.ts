import { Component, OnInit } from '@angular/core';
import { User } from '../Model/user.model';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login-admin',
  standalone: false,
  
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.css'
})
export class LoginAdminComponent  implements OnInit{

  erreur: number= 0;

  user = new User();

  err:number = 0;

  message : string = "login ou mot de passe erronés.."; 
  constructor(private authService: AuthService, private router:Router){}

  
  ngOnInit(): void {
    
  }

  onLoggedin(){
    this.authService.login(this.user).subscribe({
      next: (data) => {
        let jwToken = data.headers.get('Authorization')!;
        this.authService.saveToken(jwToken);
        if(this.authService.isAdmin()){
          this.router.navigate(['/home']);
        }
        else{
          this.router.navigate(['/plan']);

        }
      },
      error: (err) => {
        this.err =1;
        if(err.error.errorCause=='disabled')
          this.message="Utlisateur déasctivé, veuillez contacter votre administrateur";
  }
});
  }
}

