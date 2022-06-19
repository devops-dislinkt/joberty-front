import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Company } from '../model/company.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class MyCompanyService {

  path = 'http://localhost:8060/api';

  constructor(
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar,
    private userService: UserService,
  ) { }


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
