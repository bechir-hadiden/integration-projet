import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CalendarModule, DateAdapter} from 'angular-calendar';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr'; 
import { PlanComponent } from './plan/plan.component';
import { RouterModule } from '@angular/router'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AccueilComponent } from './accueil/accueil.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VerifEmailComponent } from './verif-email/verif-email.component'; 
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddLegumeComponent } from './add-legume/add-legume.component';
import { AddSanteComponent } from './add-sante/add-sante.component';
import { TestComponent } from './test/test.component';
import { ContactComponent } from './contact/contact.component';
import { MmmmmComponent } from './mmmmm/mmmmm.component';
import { SliderComponent } from "./slider/slider.component";
import { FooterComponent } from './footer/footer.component'; 
import { TokenInterceptor } from './token.interceptor';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { BaseChartDirective } from 'ng2-charts';
import { ProposNousComponent } from './propos-nous/propos-nous.component';

registerLocaleData(localeFr , 'fr'); 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PlanComponent,
    AccueilComponent,
    VerifEmailComponent,
    QuestionnaireComponent,
    NavbarComponent ,
    RegisterComponent,
    AddLegumeComponent,
    AddSanteComponent,
    TestComponent,
    ContactComponent,
    MmmmmComponent,
    FooterComponent,
    ForbiddenComponent,
    LoginAdminComponent,
    ProposNousComponent,
    // SliderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CalendarModule.forRoot({
        provide: DateAdapter,
        useFactory: adapterFactory,
    }),
    BrowserAnimationsModule,
    SliderComponent,
    BaseChartDirective
],
providers: [{ provide : HTTP_INTERCEPTORS, useClass : TokenInterceptor,multi : true}
],  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],

})
export class AppModule { }
