import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../Services-Api/LoginService/login-service.service';
import { LoginData } from '../Models/login-data';
import { CanActivateFn, Router } from '@angular/router';

@Component({
  selector: 'app-ulogin',
  templateUrl: './ulogin.component.html',
  styleUrls: ['./ulogin.component.css']
})
export class ULoginComponent{
  LoginForm : FormGroup;
  logindata:LoginData;

  constructor(private loginservce:LoginServiceService,private router:Router,private fb:FormBuilder){
    this.LoginForm = this.fb.group({
      // "username": new FormControl('',[Validators.required]),
      "email": new FormControl('',[Validators.required]),
      "password": new FormControl('',[Validators.required])
    });
  }

  ngOnInit() {
    
  }

  LoginCheck(){
    window.localStorage.clear();
    this.logindata = this.LoginForm.value;
    this.loginservce.logincheck(this.logindata).subscribe(
      success =>{
        // Check if tokens are available
        if (!success || !success.refresh || !success.access) {
          alert("Login failed. Please try again.");
          return; // Stop further execution
        }
        
        //console.log(success);
        const tokens = {
          refresh : success.refresh,
          access : success.access
        }
        // alert(success.token);
        // json-stringify : converts json objects to strings
        window.localStorage.setItem('tgt', JSON.stringify(tokens));     
        // window.localStorage.setItem('tgt_name', this.logindata.name);
        // window.localStorage.setItem('tgt', success);
        // window.localStorage.setItem('tgt_userName', success.username);
        // console.log("username :" +window.localStorage.getItem(success.username))
        // console.log("Token:",+window.localStorage.getItem(success.token));
        this.router.navigateByUrl('FirstPage');
        alert("WELCOME ADMIN",);
        console.log("LOGGEDIN SUCCESSFULLY");
      },
      error =>{
        console.log(error);
        alert("LOGIN FAILED....CHECK THE CREDENTIALS");
        this.router.navigateByUrl('UserLogin');
        this.LoginForm.reset();  
      }
    )
  }

  Registerpge(){
    this.router.navigateByUrl('UserRegister');
  }

}
