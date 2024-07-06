import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CountDataLeadsService } from 'src/app/Services-Api/CountDataLeads/count-data-leads.service';
import { DeleteLeadsService } from 'src/app/Services-Api/LeadsDataServices/DeleteLeadsData/delete-leads.service';
import { GtLeadsDataService } from 'src/app/Services-Api/LeadsDataServices/GetLeadsData/gt-leads-data.service';

@Component({
  selector: 'app-attempted-leads-data',
  templateUrl: './attempted-leads-data.component.html',
  styleUrls: ['./attempted-leads-data.component.css']
})
export class AttemptedLeadsDataComponent {
  constructor(private router:Router ,private countdatasrvce:CountDataLeadsService,private DeleteLeadService:DeleteLeadsService, private gtleadsDataServce:GtLeadsDataService,){}
  count1:number;

  oppdata:any;
  ngOnInit():void{
    
    this.CountAllLeads();

    // RETRIEVING OPPORTUNITY LEADSDATA
    this.countdatasrvce.AttemptedLeadsData().subscribe(Data =>{
      this.oppdata= Data;
      console.log("ATTEMPTED LEADS :"+this.oppdata);
    },
    error =>{
      console.error("FAILED TO RETRIEVE ATTEMPTED LEADS");
    });

    console.log(this.token);
    
  };

  Delete(id:number){
    const confirmation = window.confirm('Are you sure you want to delete this item?');
    if (confirmation) {
      this.DeleteLeadService.DeleteLeadData(id).subscribe(
        response => {
          console.log('Item deleted successfully',id);
          this.router.navigate(['AttemptedDataL'])
          // window.location.reload();
        }
      )
    }
  }

  Update(id:number){
    this.router.navigateByUrl('UpdateLeads/'+id+'/');
  }

  // TOTAL COUNT
  CountAllLeads():void{
    // ALL LEADS COUNT
    this.countdatasrvce.GetallCount().subscribe(result =>{
      this.count1=result;
      console.log("TOTAL LEADS:"+this.count1)
    },
    (error) =>{
       console.error("ERROR IN FETCHING THE DATA");
    }
  )};

  token:string=window.localStorage.getItem('tgt');
  logout(){
    // this.logoutservice.logout();
    console.log(this.token);
    localStorage.removeItem('token');
    window.localStorage.clear();
    this.router.navigate(['/login']); 
  }
}
