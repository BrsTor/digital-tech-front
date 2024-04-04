import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient, private router: Router) { }

  createUser(body: any) {
    this.http.post(environment.baseApiUrl+'auth/signup', body).subscribe(resp => {
      this.router.navigate(['/homepage'])
    }, err => {
      alert('Error Code: '+err.status+'. '+err.statusText +'\n'+err.error.message)
    })
  }
}
