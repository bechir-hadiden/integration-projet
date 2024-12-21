import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PlanComponent } from './plan/plan.component';
import { FormationComponent } from './formation/formation.component';
import { SliderComponent } from './slider/slider.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RegisterComponent } from './register/register.component';
import { VerifEmailComponent } from './verif-email/verif-email.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { AddLegumeComponent } from './add-legume/add-legume.component';
import { TestComponent } from './test/test.component';
import { AddSanteComponent } from './add-sante/add-sante.component';
import { ContactComponent } from './contact/contact.component';
import { MmmmmComponent } from './mmmmm/mmmmm.component';
import { FooterComponent } from './footer/footer.component';
import { santeGuard } from './guard/sante.guard';

const routes: Routes = [
  {path: "login", component : LoginComponent},
  {path: "plan", component : PlanComponent},
  {path: "formation", component : FormationComponent},
  {path: "slider", component : SliderComponent},
  {path: "", redirectTo: "acceuil", pathMatch: "full"},
  {path: "home", component: AccueilComponent},
  {path:"register", component:RegisterComponent},
  { path: 'verifEmail', component: VerifEmailComponent },
  {path : 'questionnaire', component:QuestionnaireComponent},
  {path : 'acceuil', component:AccueilComponent},
  {path : 'add-legume', component:AddLegumeComponent },
  {path : 'add-sante', component:AddSanteComponent  },
  {path : 'test', component:TestComponent},
  {path : 'contact', component:ContactComponent},
  {path : 'footer', component:FooterComponent},
  {path : 'm', component:MmmmmComponent},
  // {path : 'calories', component:ClaoriesComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
