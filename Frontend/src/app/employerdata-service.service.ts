import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployerdataService {

  item={
    name:"",
    email:"",
    phone:"",
    company:"",
    password:"",
    conpassword:"",
    compdesc:""
  }
  emp={
    email:"",
    password:""
  }

  constructor(private http:HttpClient) { }

  postEmployerdata(item:any){
    return this.http.post<any>('/api/postEmployer',item)
    .subscribe(data=>{console.log(data)})
  }
  
  loginEmployer(emp:any){
    return this.http.post<any>('/api/loginemployer',emp)
  }

  getEmployer(id:any){
    return this.http.get('/api/getEmployer/'+id)
  }

  getAllEmployers(){
    return this.http.get('/api/getAllEmployer')
  }
}
