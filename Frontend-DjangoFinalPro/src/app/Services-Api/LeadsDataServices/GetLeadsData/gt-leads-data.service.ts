import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Leads } from 'src/app/Models/LeadsDatas/leads';
import { UpdateLeads } from 'src/app/Models/LeadsDatas/update-leads';

@Injectable({
  providedIn: 'root'
})
export class GtLeadsDataService {

  constructor(private Http:HttpClient) { }

  // FOR RETRIEVING ALL DATA
  GetLeadsDataUrl: string="http://127.0.0.1:3000/api/leads/";
  getLeadsData(){
    return this.Http.get<any>(this.GetLeadsDataUrl+"");
  }

  // FOR RETRIEVING SINGLE DATA
  GetSingleLeadDataUrl: string="http://127.0.0.1:3000/api/leads/";
  getSingleLead(id:any){
    return this.Http.get<any>(`${this.UpdateLeadsDataUrl}${id}/`);
  }

  // FOR UPDATING SINGLE DATA
  UpdateLeadsDataUrl:string="http://127.0.0.1:3000/api/leads/";
  UpdateLeadData(id:any, uData:any){       
    return this.Http.put<any>(`${this.UpdateLeadsDataUrl}${id}/`,uData);       //put - is used to update some values, patch- is used to update all values
  }
}

