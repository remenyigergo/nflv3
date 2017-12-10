import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-globals',
  templateUrl: './globals.component.html',
  styleUrls: ['./globals.component.css']
})
export class GlobalsComponent implements OnInit {

  test = localStorage.currentUser;

  constructor(private http: Http, private userService: UserService) { }

  ngOnInit() {

  }
  getBalance() {
    console.log("getBalance globals")
    
    
  }

}
