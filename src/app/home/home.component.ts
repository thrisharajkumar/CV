import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from '../home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: any[];
  //Accessing the service using constructor injection
  //_homeService is an instance of the homeService class in home.service.ts
  constructor(private _homeService: HomeService) {
    this.users = this._homeService.getDetails();
  }
// import { Component, OnInit, Input } from '@angular/core';
  @Input() user!: any;
//Toggle effect to show and hide the customer details
  userDetail = false;
  showUserDetailsToggle() {
    this.userDetail = !this.userDetail;//!false
  }
  //class to show the change in + and - in the button
  getClass() {
    var classList = '';
    if (this.userDetail) {
      classList = 'fa fa-plus';
    } else {
      classList = 'fa fa-minus';
    }
    return classList;
  }
  ngOnInit(): void {
  }
}

  


