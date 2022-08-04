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
