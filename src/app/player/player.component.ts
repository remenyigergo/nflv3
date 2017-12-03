import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../player.service';
import { Player, PlayersComponent } from '../players/players.component';
import { forEach } from '@angular/router/src/utils/collection';
import { NgModule, Input } from '@angular/core';





@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  id: number;
  player: PlayerDetailed = PlayerDetailed[4];
  players: Player = Player[32];

  constructor(private route: ActivatedRoute, private playerService: PlayerService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    });

    this.playerService.getPlayer().subscribe(
      player => {
        this.player = player;
      });

      this.playerService.getPlayers().subscribe(
        players => {
          this.players = players;
        });

      
  }




}

export class PlayerDetailed extends Player {
  private playerId;
  private college;
  private caphit;
  private highschool;
  private relatives;
  private twitter;

  constructor(playerId, college, caphit, highschool, relatives, twitter, id, name, birthDate, position, height, weight, team) {
    super(id, name, birthDate, position, height, weight, team);
    this.playerId = playerId;
    this.college = college;
    this.caphit = caphit;
    this.highschool = highschool;
    this.relatives = relatives;
    this.twitter = twitter;

  }
}