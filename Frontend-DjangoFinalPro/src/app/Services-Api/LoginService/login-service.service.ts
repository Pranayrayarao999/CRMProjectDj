import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginData } from 'src/app/Models/login-data';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private loggedIn = false;

  constructor(private Http:HttpClient) { }


  LoginUrl:string="http://127.0.0.1:3000/token/";

  logincheck(data : LoginData){
    return this.Http.post<any>(this.LoginUrl,data);
    
  }

  // isAuthenticated(): boolean {
  //   return this.loggedIn;
  // }

  



}
