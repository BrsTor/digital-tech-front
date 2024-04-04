import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  createUser(body: any) {
    this.http.post<User>(environment.baseApiUrl+'auth/signup', body).subscribe(resp => {
      localStorage.setItem('role', resp.role)
      this.router.navigate(['/homepage'])
    }, err => {
      alert('Error Code: '+err.status+'. '+err.statusText +'\n'+err.error.message)
    })
  }

  logIn(body: any){
    return this.http.post<User>(environment.baseApiUrl+'auth/signin', body).subscribe((resp) => {
      localStorage.setItem('role', resp.role)
      this.router.navigate(['/homepage'])
    }, err => {
      alert('Error Code: '+err.status+'. '+err.statusText +'\n'+err.error.message)
    })
  }

  /* whoAmI(): Observable<any> {
    return this.http.get<any>(environment.baseApiUrl+'auth/whoami', { withCredentials: true })
  } */
}
