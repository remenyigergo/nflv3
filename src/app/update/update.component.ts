import { Component, OnInit, NgModule } from '@angular/core';
import { Match } from '../post/post.component';
import { Http } from '@angular/http';
import { PostService } from '../post.service';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
  teammodel = new TeamModel(null,null,null,null);
  matchmodel = new Match(null,null,null,null,null,null,null,null,null,null,null,null,null, null);
  playermodel=new PlayerModel(null,null,null,null,null,null,null,null,null,null,null,null,null,null)

  constructor(private http: Http, private updateService: UpdateService) { }

  ngOnInit() {
  }

  
  updateAMatch() {
    this.updateService.updateMatch(this.matchmodel);
  }

    
  updateATeam() {    
    console.log(this.teammodel.name);
    this.updateService.updateTeam(this.teammodel);
  }

  updateAPlayer() {    
    console.log(this.playermodel.name);
    this.updateService.updatePlayer(this.playermodel);
  }

}

export class TeamModel {

  constructor(
    public id: string,
    public name: string,
    public site: string, 
    public division: string

  ){}
}

export class PlayerModel {
  
    constructor(
      public id: string,
      public name: string,
      public birthdate: string, 
      public position: string,
      public height: string,
      public weight: string,
      public team: string,
      public draftteam: string,
      public currentteam: string,
      public college: string,
      public caphit: string,
      public highschool: string,
      public relatives: string,
      public twitter: string

    ){}
  }