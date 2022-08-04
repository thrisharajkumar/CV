import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  courseSelected:string= ''; 
 
  AddCourse(courseId: string): void {
    if (!courseId) { return; }
    this.courseSelected = courseId; 
    console.log(courseId) 
  }
}