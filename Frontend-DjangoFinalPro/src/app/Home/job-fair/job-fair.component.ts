import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-fair',
  templateUrl: './job-fair.component.html',
  styleUrls: ['./job-fair.component.css']
})
export class JobFairComponent {
  ngOnInit(){
    console.log(this.token)
  }

  constructor(private router:Router){}

  token:string=window.localStorage.getItem('tgt');

  logout(){
    // this.logoutservice.logout();
    console.log(this.token);
    localStorage.removeItem('token');
    window.localStorage.clear();
    this.router.navigate(['/login']);
  }

}
