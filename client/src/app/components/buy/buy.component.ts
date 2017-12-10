import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http/';
import { Match } from '../post/post.component';
import { MatchService } from '../../match.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AuthGuard } from '../../_guard/auth.guard';
import { UserService, User } from '../../services/user.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  currentUser: User;
  users: User[] = [];
  upComingMatches: Match[];
  //ls = localStorage.currentUser;


  constructor(private http: Http, private matchService: MatchService, private router: Router, private authGuard: AuthGuard, private userService: UserService) {

  }

  ngOnInit() {
    //this.globals.getBalance();
    this.matchService.getUpComingMatches().subscribe(
      matches => {
        this.upComingMatches = matches;

      },
    );


  }

  Purchase(match) {
    this.router.navigate(['/checkout'], { queryParams: match });
  }

}


