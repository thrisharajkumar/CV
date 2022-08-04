import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  onClick() 
  {
        alert("Contal Details Sent!")
  }

  courseTypes = ['Java Developer', 'Angular Web Developer','Python Developer','Intern'];
  myForm: FormGroup | any;
  username: FormControl | any;
  tel: FormControl | any;
  courseType: FormControl | any;
  ngOnInit() {
    this.username = new FormControl('', [Validators.required, Validators.minLength(5)]);
    this.tel= new FormControl( '', [Validators.required, Validators.minLength(10)]), Validators.pattern(/^[0-9]\d*$/);
    this.courseType = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]);
    this.myForm = new FormGroup({
      'name': this.username,
      'Job': this.courseType
    });
  }
}
