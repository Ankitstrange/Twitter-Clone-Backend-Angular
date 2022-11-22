import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  baseUrl:string ="http://localhost:8080/";
  constructor(private http:HttpClient) {
   }

  login(loginInput:string):Observable<any>{
    return this.http.post(this.baseUrl+`users/loginUser`,{"loginInput":loginInput});
  }

  signup(signUpForm:any):Observable<any>{
    return this.http.post(this.baseUrl+`users/register`,signUpForm);
  }
}
