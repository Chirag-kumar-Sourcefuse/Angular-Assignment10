import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {users} from './model-class/model-class';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  private link:string="http://localhost:3000";
  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(this.link+'/routes-users');
  }
  getparticularUser(id:any){
    return this.http.get(this.link+`/routes-users/${id}`)
  }
  deleteUser(id: any) {
    return this.http.delete(`${this.link}/routes-users/${id}`);
  }
  updateData(id:number,updatedData:any){
    return this.http.put(`${this.link}/routes-users/${id}`,updatedData);
  }
}
