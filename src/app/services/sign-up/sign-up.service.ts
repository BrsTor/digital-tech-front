import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient) { }

  createUser(body: any) {
    this.http.post(environment.baseApiUrl+'auth/signup', body).subscribe(resp => {
      console.log(resp)
      /* TODO - Redirect to homepage */
    }, err => {
      alert('Error Code: '+err.status+'. '+err.statusText +'\n'+err.error.message)
    })
  }
}
