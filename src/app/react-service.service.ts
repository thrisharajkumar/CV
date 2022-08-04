import { Injectable } from '@angular/core';
import { Angular } from './angular';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReactServiceService {

  angular:Angular[]=
  [
    {
      id:1,
      name:"LINKEDIN LEARNING",
      designation:"HTML ESSENTIAL TRAINING CERTIFICATION",
      phone:""
    },
    {
      id:101,
      name:"LINKEDIN LEARNING",
      designation:"PYTHON PROGRAMMING FOR NON-PROGRAMMERS",
      phone:""
    },
    
  ]

  public getdetails():any{
    const angularObservable=new Observable(observer=>{
      setTimeout(()=>{
        observer.next(this.angular);

      },500);
    })
    return angularObservable;
  }

  constructor() { }
}
