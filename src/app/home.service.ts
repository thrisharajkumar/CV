import { Injectable } from '@angular/core';
import { RouterLink } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  getDetails(): any[] {
    return [
      {
        
        "content": "",
        "image":"/assets/IMG3.jpg",
        "name": "Education",
        "Details": "Go to Education.."
      },
      {
        "content": "",
        "image":"/assets/IMG2.png",
        "name": "Skills & Interests",
        "Details": "Go to Skills & Interests.."
        
      },
      {

        "content": "",
        "image":"/assets/IMG4.png",
        "name": "Contact",
        "Details": "Go to Certificates.."

        
      },
      
    ];
  }
  constructor()
{
 
}
}