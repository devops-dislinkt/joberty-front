import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgSelectOption } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from "@angular/common";
import { NgSelectModule } from "@ng-select/ng-select";
import { MatListModule } from "@angular/material/list";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

import { UserService } from './services/user.service';
import { HomeComponent } from './components/home/home.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MyCompanyComponent } from './components/my-company/my-company.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { CompanyItemComponent } from './components/company-item/company-item.component';
import { CompanyComponent } from './components/company/company.component';
import { CompanyNavigationComponent } from './components/company-navigation/company-navigation.component';
import { CommentsComponent } from './components/comments/comments.component';
import { InterviewComponent } from './components/interview/interview.component';
import { SalariesComponent } from './components/salaries/salaries.component';
import { JobComponent } from './components/job/job.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    NavigationBarComponent,
    MyCompanyComponent,
    CompaniesComponent,
    CompanyItemComponent,
    CompanyComponent,
    CompanyNavigationComponent,
    CommentsComponent,
    InterviewComponent,
    SalariesComponent,
    JobComponent,
    JobDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatNativeDateModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatDialogModule,
    CommonModule,
    NgSelectModule,
    MatMenuModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    MatRadioModule
  ],
  providers: [
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
