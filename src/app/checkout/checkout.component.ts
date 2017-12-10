import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { Match } from '../matches/matches.component';
import { tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MailService } from '../services/mail.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  formmodel = new CheckoutFormModel(null, null, null, null, null, null,localStorage.getItem("currentUser.username"));
  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router, private mailService: MailService) { }
  order: any;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.order = params;
      this.formmodel.matchId = this.order._id;
      this.formmodel.date = new Date();
    });
  }

  checkOut() {
    var a = this.userService.buyTicket(this.formmodel).subscribe(
      ticketBuyResponse => {
        console.log(ticketBuyResponse)
        if (ticketBuyResponse) {
          this.router.navigate(['/success']);
        }
      },
      error => {
        this.router.navigate(['/failed']);
      });

  }
}

class CheckoutFormModel {
  constructor(
    public matchId,
    public date,
    public email,
    public firstname,
    public surname,
    public tickets,
    public username
  ) { }
}

