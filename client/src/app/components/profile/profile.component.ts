import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username = localStorage.getItem("currentUser.username");
  id = localStorage.getItem("currentUser.id");
  balance = localStorage.getItem("currentUser.balance");
  surname = localStorage.getItem("currentUser.surname");
  firstname = localStorage.getItem("currentUser.firstname");

  depositModel = new Deposit(null,localStorage.getItem("currentUser.username"));
  withdrawalModel = new Withdrawal(null,localStorage.getItem("currentUser.username"));
  message = "";

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.message="";
  }

  Deposit() {
    console.log("Deposited: "+this.depositModel.deposit)
    this.userService.deposit(this.depositModel).subscribe(data => {
      console.log("deposite finished.")
      
      this.balance = data;
      this.message="Success.";
      
    });    
  }

  Withdrawal() {
    console.log("Withdrawed: "+this.withdrawalModel.withdrawal)
    this.userService.withdraw(this.withdrawalModel).subscribe(data => {
      console.log("withdrawal finished.")
    }); 
  }
}


export class Deposit {
  constructor(public deposit, public username) {
   }

}

class Withdrawal {
  constructor(public withdrawal, public username) {}
  
}
