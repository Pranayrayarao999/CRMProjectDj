import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CountDataLeadsService } from 'src/app/Services-Api/CountDataLeads/count-data-leads.service';
import { DeleteLeadsService } from 'src/app/Services-Api/LeadsDataServices/DeleteLeadsData/delete-leads.service';

@Component({
  selector: 'app-opportunity-data-leads',
  templateUrl: './opportunity-data-leads.component.html',
  styleUrls: ['./opportunity-data-leads.component.css']
})
export class OpportunityDataLeadsComponent {
  constructor(private router:Router ,private countdatasrvce:CountDataLeadsService,private DeleteLeadService:DeleteLeadsService){}
  count1:number;

  oppdata:any;
  ngOnInit():void{
    
    this.CountAllLeads();

    // RETRIEVING OPPORTUNITY LEADSDATA
    this.countdatasrvce.OpportunityLeadsData().subscribe(Data =>{
      this.oppdata= Data;
      console.log("OPPORTUNITY LEADS :"+this.oppdata);
    },
    error =>{
      console.error("FAILED TO RETRIEVE OPPORTUNITY LEADS");
    });

    console.log(this.token);
    
  };

  Update(id:number){
    this.router.navigateByUrl('UpdateLeads/'+id+'/');
  }

  Delete(id:number){
    const confirmation = window.confirm('Are you sure you want to delete this item?');
    if (confirmation) {
      this.DeleteLeadService.DeleteLeadData(id).subscribe(
        response => {
          console.log('Item deleted successfully',id);
          this.router.navigate(['OpportunityDataL']);
          // window.location.reload();
        }
      )
    }
  }

  // COUNT
  CountAllLeads():void{
    // ALL LEADS COUNT
    this.countdatasrvce.GetallCount().subscribe(result =>{
      this.count1=result;
      console.log("TOTAL LEADS:"+this.count1)
    },
    error =>{
       console.error("ERROR IN FETCHING THE DATA");
    }
  )};

  // TABLE
  // Update(id:number){
  //   this.router.navigateByUrl('UpdateLeads/'+id+'/');
  // }

  // Delete(id:number){
  //   const confirmation = window.confirm('Are you sure you want to delete this item?');
  //   if (confirmation) {
  //     this.DeleteLeadService.DeleteLeadData(id).subscribe(
  //       response => {
  //         console.log('Item deleted successfully',id);
  //         this.LeadsData();
  //         // window.location.reload();
  //       }
  //     )
  //   }
  // }

  token:string=window.localStorage.getItem('tgt');
  logout(){
    // this.logoutservice.logout();
    console.log(this.token);
    localStorage.removeItem('token');
    window.localStorage.clear();
    this.router.navigate(['/login']); 
  }

}
