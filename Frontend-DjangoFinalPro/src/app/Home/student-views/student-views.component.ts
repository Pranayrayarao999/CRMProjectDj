import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-views',
  templateUrl: './student-views.component.html',
  styleUrls: ['./student-views.component.css']
})
export class StudentViewsComponent {
  constructor(private router:Router){}

  ngOnInit(){
    console.log("token:"+this.token);
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
