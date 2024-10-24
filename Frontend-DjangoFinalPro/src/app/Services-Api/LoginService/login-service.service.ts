import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginData, SignUpData } from 'src/app/Models/login-data';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private loggedIn = false;

  constructor(private Http:HttpClient) { }

  //THIS IS ALSO WORKING
  //LoginUrl:string="http://127.0.0.1:3000/token/";
  LoginUrl:string="http://127.0.0.1:3000/Auth/Login/";

  logincheck(data : LoginData){
    return this.Http.post<any>(this.LoginUrl,data);
    
  }

  // isAuthenticated(): boolean {
  //   return this.loggedIn;
  // }

  // SignUp
  SignUpUrl:string = "http://127.0.0.1:3000/Auth/Registration/";

  Signupcheck(data : SignUpData){
    return this.Http.post<any>(this.SignUpUrl,data);
    
  }


  



}
