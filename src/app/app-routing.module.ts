import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { MyCompanyComponent } from './components/my-company/my-company.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { CompanyComponent } from './components/company/company.component';
import { InterviewComponent } from './components/interview/interview.component';
import { SalariesComponent } from './components/salaries/salaries.component';
import { CommentsComponent } from './components/comments/comments.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  {
    path: '', component: HomeComponent,
    children: [
      {path: 'my-company', component: MyCompanyComponent},
      {path: 'companies', component: CompaniesComponent},
      {path: 'company/:id', component: CompanyComponent},
      {path: 'interview/:id', component: InterviewComponent},
      {path: 'salaries/:id', component: SalariesComponent},
      {path: 'comments/:id', component: CommentsComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
