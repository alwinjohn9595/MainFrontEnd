import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http:HttpClient) { }


postjob(user:any){
  return this.http.post<any>("/api/jobs/postjob",user)
}

getjobs(){
  return this.http.get("/api/all")
}
getempjob(empdata:any){
  return this.http.get("/api/jobs/getempjobs/"+empdata)
}
applyjob(data:any){
  console.log(data)
  return this.http.post("/api/jobs/applyjob",data)
}



deletejobpost(data:any){
  return this.http.delete("/api/jobs/deletejobpost/"+data)
}



loggedinuserjobdetails(data1:any){
   console.log(data1);
  return this.http.post<any>("/api/jobs/loggedin/",{"email":data1})
}

applicantdata(data:any){
  console.log(data)
  return this.http.get("/api/jobs/applicant/"+data)

}

verifyalumni(alumni:any){
  console.log(alumni);
  console.log("hai")
   return this.http.post("/api/jobs/appverify/",alumni)
   .subscribe(app =>{console.log(app)})
}


deleteapplicant(appdelete:any){
 console.log(appdelete);
 return this.http.delete("/api/jobs/deleteapplicant/"+appdelete).subscribe((data)=>[
   console.log(data)
 ])
}

}
