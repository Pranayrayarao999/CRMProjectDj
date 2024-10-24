
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeleteLeadsService } from 'src/app/Services-Api/LeadsDataServices/DeleteLeadsData/delete-leads.service';
import { GtLeadsDataService } from 'src/app/Services-Api/LeadsDataServices/GetLeadsData/gt-leads-data.service';

@Component({
  selector: 'app-today-leads',
  templateUrl: './today-leads.component.html',
  styleUrls: ['./today-leads.component.css']
})
export class TodayLeadsComponent implements OnInit{

  constructor(private gtleadsDataServce:GtLeadsDataService, private DeleteLeadService:DeleteLeadsService, private router:Router){}

  id:number;

  LeadsData:any;
  ngOnInit():void{
    this.gtleadsDataServce.getLeadsData().subscribe(response =>{
      this.LeadsData=response;
      console.log(this.LeadsData);
      console.log("Data Retrieved SuccessFully");

      console.log(this.token)
    })
  }

  Update(id:number){
    this.router.navigateByUrl('UpdateLeads/'+id+'/');
  }

  Delete(id:number){
    const confirmation = window.confirm('Are you sure you want to delete this item?');
    if (confirmation) {
      this.DeleteLeadService.DeleteLeadData(id).subscribe(
        response => {
          console.log('Item deleted successfully',id);
          this.LeadsData();
          // window.location.reload();
        }
      )
    }
  }

  token:string=window.localStorage.getItem('tgt');
  logout(){
    // this.logoutservice.logout();
    console.log(this.token);
    localStorage.removeItem('token');
    window.localStorage.clear();
    this.router.navigate(['/login']); 
  }

  @ViewChild('searchBox') searchBox:ElementRef;
  Search(){
    console.log(this.searchBox.nativeElement.value)
    let text = this.searchBox.nativeElement.value;
    this.gtleadsDataServce.SearchData(text).subscribe(result =>{ this.LeadsData = result})
  }

  // Date:string;
  // TodaysLData(){
  //   const Date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  //   this.gtleadsDataServce.SearchData(Date).subscribe(result =>{ this.LeadsData = result})
  // }

  // TOTAL DATA DOWNLOAD INTO .CSV 
  data(url){
    window.open(url,'_blank'); // Opens the URL in a new tab 
  }

}
