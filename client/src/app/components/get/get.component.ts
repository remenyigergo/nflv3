import { Component, OnInit } from '@angular/core';
import { Match } from '../matches/matches.component';
import { MatchService } from '../../match.service';
import { GetService } from '../../get.service';
import { PipeTransform, Pipe } from '@angular/core';
import { Player } from '../players/players.component';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  aMatch: Match;
  playerById: Player;
  playerByName: Player;

  playermodel = new PlayerModel(null, null, null, null, null, null, null, null, null, null, null, null);

  constructor(private getService: GetService) { }

  ngOnInit() {
    this.getService.getAMatch().subscribe(
      aMatch => {
        this.aMatch = aMatch;
      });
  }

  getPlayerById(id) {
    this.getService.getAPlayerById(this.playermodel.id).subscribe(
      playerbyid => {
        this.playerById = playerbyid;
      });
  }

  getPlayerByName(id) {
    this.getService.getAPlayerByName(""+this.playermodel.name).subscribe(
      playerbyname => {
        this.playerByName = playerbyname;
      });
  }
}


class PlayerModel {
  constructor(
    public id: number,
    public name: string,
    public birthdate: string,
    public position: string,
    public body: string[],
    public team: string,
    public teams: string[],
    public college: string,
    public caphit: number,
    public highschool: string,
    public relatives: string,
    public twitter: string
  ) { }

}

