import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MailService } from '../services/mail.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor(private router: Router, private mailService: MailService) { }

  ngOnInit() {
    setTimeout((router: Router) => {
      this.router.navigate(['/buy']);
    }, 2000);


    
  }

}
