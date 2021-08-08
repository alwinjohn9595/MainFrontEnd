import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumniService {
  item = {
    uname: '',
    email: '',
    password: '',
    hq: '',
    city: ''

  }

  constructor(private http: HttpClient) { }
  addalumni(item: any) {
    console.log(item);
    return this.http.post<any>("/api/alumni/signup",item)
      
  }

  getalumni(id:any){
    
    return this.http.get("/api/alumni/update/"+id);
  }
//all alumnissss
  getallalumnidetails(){
    
    return this.http.get("/api/alumni");
  }

savealumni(item:any){
  console.log(item)
  return this.http.put("/api/alumni/save",item)
  .subscribe(data =>{console.log(data)})
}

getalumnidetail(email:any){
  return this.http.get("/api/alumni/"+email)

}


editalumni(alumnidata:any){
  
  return this.http.put("/api/alumni/update",alumnidata)
  .subscribe(data =>{console.log("success")})
}

deletealumni(alumnidata:any){
  console.log(alumnidata)
  return this.http.delete("/api/alumni/delete/"+alumnidata)
}






}
