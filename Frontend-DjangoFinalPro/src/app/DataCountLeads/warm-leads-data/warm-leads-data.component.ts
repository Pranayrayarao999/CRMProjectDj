import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CountDataLeadsService } from 'src/app/Services-Api/CountDataLeads/count-data-leads.service';
import { DeleteLeadsService } from 'src/app/Services-Api/LeadsDataServices/DeleteLeadsData/delete-leads.service';

@Component({
  selector: 'app-warm-leads-data',
  templateUrl: './warm-leads-data.component.html',
  styleUrls: ['./warm-leads-data.component.css']
})
export class WarmLeadsDataComponent {
  constructor(private DeleteLeadService:DeleteLeadsService,private countdatasrvce:CountDataLeadsService, private router:Router){}
  count1:number;

  oppdata:any;
  ngOnInit():void{
    // this.CountAllLeads();

    // RETRIEVING WARMLEADS DATA
    this.countdatasrvce.WarmLeadsData().subscribe(Data =>{
      this.oppdata= Data;
      console.log("WARM LEADS :"+this.oppdata);
    },
    error =>{
      console.error("FAILED TO RETRIEVE WARM LEADS");
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
          this.router.navigate(['WarmDataL']);
          // window.location.reload();
        }
      )
    }
  }

  // COUNT
  // CountAllLeads():void{
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
