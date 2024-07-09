import { DatePipe } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DeleteLeadsService } from 'src/app/Services-Api/LeadsDataServices/DeleteLeadsData/delete-leads.service';
import { GtLeadsDataService } from 'src/app/Services-Api/LeadsDataServices/GetLeadsData/gt-leads-data.service';

@Component({
  selector: 'app-today-data',
  templateUrl: './today-data.component.html',
  styleUrls: ['./today-data.component.css']
})
export class TodayDataComponent {
  constructor(private gtleadsDataServce:GtLeadsDataService, private DeleteLeadService:DeleteLeadsService, private router:Router,private datePipe: DatePipe){}

  id:number;
  LeadsData:any;

  currentDate:string;
  ngOnInit():void{
    this.currentDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.gtleadsDataServce.SearchData(this.currentDate).subscribe(result =>{ this.LeadsData = result})
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
}
