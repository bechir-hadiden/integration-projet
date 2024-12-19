import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../Model/user.model';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class LoginComponent  implements OnInit{

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
        if(this.authService.isAdmin())
        {
          this.router.navigate(['/home']);

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
