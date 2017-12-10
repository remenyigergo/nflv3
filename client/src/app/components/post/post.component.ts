import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  model = new Match('','', '', '', '', '', '', '', '', '', '', '', '', null);

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  click(userForm: NgForm) {
    console.log("CLICKEDs");
    console.log(userForm.controls['date']);
  }

  onSubmit() {
    this.postService.submit(this.model);
  }

}


export class Match {

  constructor(
    public id: string,
    public date: string,
    public week: string,
    public guestId: string,
    public homeId: string,
    public guestScore: string,
    public homeScore: string,
    public PassYds: string,
    public RushYds: string,
    public RecYds: string,
    public PassYdsPoints: string,
    public RushYdsPoints: string,
    public RecYdsPoints: string,
    public tickets: number

  ) { }

}

