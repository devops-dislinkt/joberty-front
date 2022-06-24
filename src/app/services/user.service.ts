import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { LoginDto } from '../model/login.model';
import { User } from '../model/user.model';
import {Router} from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  path = 'http://localhost:8060/api';

  constructor(
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  async signUp(user: User) {
    try {
      const response = await this.http.post<User>(`${this.path}/signup`, user).toPromise()
      this.openSuccessSnackBar(`successfully created user ${user.username}. Please login to continue.`)
      this.router.navigate(['/login']);
      
    }
    catch (error) {
      if (error instanceof HttpErrorResponse) this.openFailSnackBar(error.error)
      else this.openFailSnackBar()
    }
  }

  async login(dto: LoginDto) {
    try {
      const jwt = await this.http.post<string>(`${this.path}/login`, dto).toPromise()
      localStorage.setItem('token', jwt)
      const decodedToken = new JwtHelperService().decodeToken(jwt)
      localStorage.setItem('role', decodedToken.role)
      localStorage.setItem('username', decodedToken.username)
      this.openSuccessSnackBar(`successfully logged in.`)
      this.router.navigate(['/']);
    }
    catch (error) {
      if (error instanceof HttpErrorResponse) this.openFailSnackBar(error.error)
      else this.openFailSnackBar()
    }
  }

  async getUser(username: string) {
    try {
      const headers = new HttpHeaders({'authorization': `Bearer ${this.getToken()}`})
      const response = await this.http.get<any>(`${this.path}/get-user/${username}`, {headers}).toPromise()
      return response
    }
    catch (error) {
      if (error instanceof HttpErrorResponse) this.openFailSnackBar(error.error)
      else this.openFailSnackBar()
    }
  }

  logout(): void {
    localStorage.removeItem("token")
    localStorage.removeItem('role')
    localStorage.removeItem('username')
    this.router.navigate(['/'])
  }

  getToken(): string {
    return <string>localStorage.getItem("token");
  }

  getUsername(): string {
    return <string>localStorage.getItem("username");
  }

  getRole(): string {
    return <string>localStorage.getItem("role");
  }

  isAdmin(): boolean {
    let authority = this.getRole();
    let role = "admin";
    return authority === role;
  }

  isUser(): boolean {
    let authority = this.getRole();
    let role = "user";
    return authority === role;
  }

  isCompanyOwner(): boolean {
    let authority = this.getRole();
    let role = "company_owner";
    return authority === role;
  }

  isLoggedIn(): boolean {
    let token = this.getToken();
    return !!token;
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
