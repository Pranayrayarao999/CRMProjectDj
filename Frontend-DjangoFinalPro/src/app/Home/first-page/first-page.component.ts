import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit{
  ngOnInit(): void {
    console.log("token :",this.token);
  }

  constructor(private router:Router){

  }

  isVisible: boolean=true;
  close(){
    this.isVisible = !this.isVisible;
  }

  token:string=window.localStorage.getItem('tgt');

  logout(){
    // this.logoutservice.logout();
    console.log(this.token);
    localStorage.removeItem('token');
    window.localStorage.clear();
    this.router.navigate(['/login']);
  }
  
}
