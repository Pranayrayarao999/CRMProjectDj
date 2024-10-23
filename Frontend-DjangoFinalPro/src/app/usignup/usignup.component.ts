import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpData } from '../Models/login-data';
import { LoginServiceService } from '../Services-Api/LoginService/login-service.service';

@Component({
  selector: 'app-usignup',
  templateUrl: './usignup.component.html',
  styleUrls: ['./usignup.component.css']
})
export class UsignupComponent {
  SignUpForm : FormGroup;
  SignUpdata: SignUpData;

  constructor(private loginservce:LoginServiceService,private router:Router,private fb:FormBuilder){
    this.SignUpForm = this.fb.group({
      // "username": new FormControl('',[Validators.required]),
      "name": new FormControl('',[Validators.required]),
      "email": new FormControl('',[Validators.required]),
      "password": new FormControl('',[Validators.required]),
      "password2": new FormControl('',[Validators.required]),
    });
  }

  SignupCheck(){
    this.SignUpdata = this.SignUpForm.value;
    this.loginservce.Signupcheck(this.SignUpdata).subscribe(
      success => {
        console.log("SignUp Successfull...Please Login");
        alert("Signup Successfull");
        this.router.navigateByUrl('UserLogin');
      },
      error => {
        console.log("SignUp Failed...Please Try Again After Some Time", error); 
        alert("SignUp Failed...Please Try Again After Some Time");
        this.SignUpForm.reset();
      }
    )
  }

  LogInpage(){
    this.router.navigateByUrl('UserLogin');
  }
}
