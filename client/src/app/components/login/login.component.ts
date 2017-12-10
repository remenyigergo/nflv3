import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AlertService } from '../../services/alert.service';
import { User, UserService } from '../../services/user.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService,
    private alertService: AlertService,
    private userService: UserService) { }

  ngOnInit() {
    // reset login status
    localStorage.clear();
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/buy';

  }

  login() {

    this.loading = true;
    this.authenticationService.login(this.model)
      .subscribe(
      data => {
        this.userService.getUserInfo(this.model.username).subscribe(data => {
          localStorage.setItem("currentUser.username", data.username);
          localStorage.setItem("currentUser.id", data._id);
          localStorage.setItem("currentUser.balance", data.balance);
          localStorage.setItem("currentUser.firstname", data.firstname);
          localStorage.setItem("currentUser.surname", data.surname);
          this.router.navigate([this.returnUrl]);
        });


      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      });

  }

}
