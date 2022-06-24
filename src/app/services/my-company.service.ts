import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Comment } from '../model/comment.model';
import { Company } from '../model/company.model';
import { Interview } from '../model/interview.model';
import { Job } from '../model/job.model';
import { Salary } from '../model/salary.model';
import { UserService } from './user.service';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MyCompanyService {

  path = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar,
    private userService: UserService,
  ) { }

  async getAllCompanies() {
    try {
      const headers = new HttpHeaders({'authorization': `Bearer ${this.userService.getToken()}`})
      const response = await this.http.get<any>(`${this.path}/companies`, {headers}).toPromise()
      return response
    }
    catch (error) {
      if (error instanceof HttpErrorResponse) this.openFailSnackBar(error.error)
      else this.openFailSnackBar()
    }
  }
  
  async getCompany(id: any) {
    try {
      const headers = new HttpHeaders({'authorization': `Bearer ${this.userService.getToken()}`})
      const response = await this.http.get<any>(`${this.path}/get-company/${id}`, {headers}).toPromise()
      return response
    }
    catch (error) {
      if (error instanceof HttpErrorResponse) this.openFailSnackBar(error.error)
      else this.openFailSnackBar()
    }
  }

  async createCompany(company: Company) {
    try {
      const headers = new HttpHeaders({'authorization': `Bearer ${this.userService.getToken()}`})
      const response = await this.http.post<Company>(`${this.path}/company`, company, {headers}).toPromise()
      this.openSuccessSnackBar(`successfully created user ${company.name}. Please login to continue.`)
      return response
    }
    catch (error) {
      if (error instanceof HttpErrorResponse) this.openFailSnackBar(error.error)
      else this.openFailSnackBar()
    }
  }

  async createComment(company_id: string, comment: Comment) {
    try {
      console.log("create comment = ", comment, " for company id = ", company_id);
      const headers = new HttpHeaders({'authorization': `Bearer ${this.userService.getToken()}`})
      const response = await this.http.post<Company>(`${this.path}/company/${company_id}/comment`, comment, {headers}).toPromise()
      this.openSuccessSnackBar(`successfully created comment.`)
      return response
    }
    catch (error) {
      if (error instanceof HttpErrorResponse) this.openFailSnackBar(error.error)
      else this.openFailSnackBar()
    }
  }

  async createInterviewComment(company_id: string, comment: Interview) {
    try {
      console.log("create interview comment = ", comment, " for company id = ", company_id);
      const headers = new HttpHeaders({'authorization': `Bearer ${this.userService.getToken()}`})
      const response = await this.http.post<Company>(`${this.path}/company/${company_id}/interview`, comment, {headers}).toPromise()
      this.openSuccessSnackBar(`successfully created comment.`)
      return response
    }
    catch (error) {
      if (error instanceof HttpErrorResponse) this.openFailSnackBar(error.error)
      else this.openFailSnackBar()
    }
  }

  async createSalary(company_id: string, salary: Salary) {
    try {
      console.log("create salary = ", salary, " for company id = ", company_id);
      const headers = new HttpHeaders({'authorization': `Bearer ${this.userService.getToken()}`})
      const response = await this.http.post<Company>(`${this.path}/company/${company_id}/salary`, salary, {headers}).toPromise()
      this.openSuccessSnackBar(`successfully created salary.`)
      return response
    }
    catch (error) {
      if (error instanceof HttpErrorResponse) this.openFailSnackBar(error.error)
      else this.openFailSnackBar()
    }
  }

  async createJob(company_id: string, job: Job) {
    try {
      console.log("create job = ", job, " for company id = ", company_id);
      const headers = new HttpHeaders({'authorization': `Bearer ${this.userService.getToken()}`})
      const response = await this.http.post<Company>(`${this.path}/company/${company_id}/job`, job, {headers}).toPromise()
      this.openSuccessSnackBar(`successfully created job.`)
      return response
    }
    catch (error) {
      if (error instanceof HttpErrorResponse) this.openFailSnackBar(error.error)
      else this.openFailSnackBar()
    }
  }

  openSuccessSnackBar(message: string): void {
    this.snackBar.open(message, 'Dismiss', {
      verticalPosition: 'top',
      panelClass: ['green-snackbar'],
      duration: 4000,
    });
  }
  openFailSnackBar(message = 'Something went wrong.'): void {
    this.snackBar.open(message, 'Dismiss', {
      verticalPosition: 'top',
      panelClass: ['red-snackbar']
    });
  }

}
