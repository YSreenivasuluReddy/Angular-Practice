import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
   studentdetails = [{
    studentid:1,
    studentname:"Sreenu",
    studentemail:"sreenureddy2002@gmail.com"
  },
  {
    studentid:2,
    studentname:"Deepak",
    studentemail:"deepak9020@gmail.com"
  },
  {
    studentid:3,
    studentname:"Shashank",
    studentemail:"shashank22@gmail.com"
  },
  {
    studentid:4,
    studentname:"Karthik",
    studentemail:"karthik02@gmail.com"
  },
]

createrecord(data:any){
  console.log(data);
  return this.studentdetails.push(data);
}

getstudentrecord(){
  return this.studentdetails;
  // const index = this.studentdetails.find((studentid)=>studentid === id)
}

getstudentbyid(id: number) {
  return this.studentdetails.find(
    x => x.studentid === id
  );
}


updatestudent(id:number,data:any)
{
  const index = this.studentdetails.findIndex(x => x.studentid === id)

  if (index !== -1) {
    this.studentdetails[index] = {
      ...this.studentdetails[index],
      ...data
    };

    return true;
  }

  return false;
  console.log(this.studentdetails);
}

deletestudent(id:number){
  this.studentdetails = this.studentdetails.filter(x=>x.studentid !== id)
}
}
