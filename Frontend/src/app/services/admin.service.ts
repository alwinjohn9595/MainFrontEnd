import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  logindata(user:any){
    
    return this.http.post<any>("/api/faculty/login",user)
  }

  addfacultydata(user:any){
    return this.http.post<any>("/api/faculty/add",user)

  }

  getfacultydata(id:any){
    return this.http.get("/api/faculty/"+id)

  }

  
 getfaculty(){
  
 return this.http.get("/api/allfaculty");

}

editfaculty(faculty:any){
  console.log('client update')
    return this.http.put("/api/faculty/update",faculty)
    .subscribe(data =>{console.log(data)})
}



deletefaculty(id:any)
{
    console.log("hai")
  return this.http.delete("/api/facultyremove/"+id)

}

  
  
  
}
