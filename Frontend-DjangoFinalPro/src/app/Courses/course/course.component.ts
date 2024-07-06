import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
  export class CourseComponent {

    constructor(private router:Router){}

    ngOnInit() {
      console.log(this.token);
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
