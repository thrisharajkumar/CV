import { Injectable } from '@angular/core';
import { Angular } from './angular';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AngularServiceService {

  angular:Angular[]=
  [
    {
      id:100,
      name:"Sana",
      designation:"Developer",
      phone:"9410238732",
    },
    {
      id:101,
      name:"Dev",
      designation:"Designer",
      phone:"5642319032"
    },
    {
      id:102,
      name:"Sam",
      designation:"Developer",
      phone:"7650930276"
    },
    {
      id:103,
      name:"Nancy",
      designation:"Developer",
      phone:"8093642782",
    },
    {
      id:104,
      name:"Cassie",
      designation:"Designer",
      phone:"6749202000"
    },
    {
      id:105,
      name:"Nora",
      designation:"Developer",
      phone:"5336281001"
    },
    {
      id:106,
      name:"Shawn",
      designation:"Designer",
      phone:"9847281909"
    },
    {
      id:107,
      name:"Aaron",
      designation:"Developer",
      phone:"4721104739"
    }
  ]

  public getdetails():any{
    const angularObservable=new Observable(observer=>{
      setTimeout(()=>{
        observer.next(this.angular);

      },1000);
    })
    return angularObservable;
  }

  constructor() { }
}
