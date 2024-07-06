import { Component, OnInit, Pipe, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CountDataLeadsService } from 'src/app/Services-Api/CountDataLeads/count-data-leads.service';

@Component({
  selector: 'app-lead-home',
  templateUrl: './lead-home.component.html',
  styleUrls: ['./lead-home.component.css']
})
export class LeadHomeComponent implements OnInit {
  constructor(private countdatasrvce:CountDataLeadsService, private router:Router){}
  count1:number;
  OppLead:number;

  ngOnInit():void{
    //COUNT OF TOTAL ALL LEADS
    this.countdatasrvce.GetallCount().subscribe(
      result =>{
        console.log(result)
        this.count1=result.count();
        console.log("TOTAL LEADS:"+this.count1);
      },
      error =>{
         console.error("ERROR IN FETCHING THE DATA");
      })

    //COUNT OF TOTAL OPPORTUNITY LEADS
    this.countdatasrvce.OpportunityCount().subscribe(result =>{
      this.OppLead=result;
      console.log("TOTAL LEADS:"+this.OppLead)
    },
    error =>{
       console.error("ERROR IN FETCHING THE DATA");
    })

    console.log(this.token);

  };

  // COUNT
  // CountAllLeads(){
  //   // ALL LEADS COUNT
  //   this.countdatasrvce.GetallCount().subscribe(result =>{
  //     this.count1=result;
  //     console.log("TOTAL LEADS:"+this.count1)
  //   },
  //   error =>{
  //      console.error("ERROR IN FETCHING THE DATA");
  //   }
  // )};

  token:string=window.localStorage.getItem('tgt');

  logout(){
    // this.logoutservice.logout();
    console.log(this.token);
    localStorage.removeItem('token');
    window.localStorage.clear();
    this.router.navigate(['/login']);
  }


}
