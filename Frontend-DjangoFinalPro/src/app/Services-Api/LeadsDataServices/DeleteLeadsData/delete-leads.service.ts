import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteLeadsService {

  constructor(private Http:HttpClient) { }

  DeleteLeadsDataUrl:string ="http://127.0.0.1:3000/api/leads/";

  DeleteLeadData(id:number){
    // const delurl=`${this.DeleteLeadsDataUrl}${id}/`;
    // return this.Http.delete(delurl);
    return this.Http.delete<any>(`${this.DeleteLeadsDataUrl}${id}/`);
  }
}
