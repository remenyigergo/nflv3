import { Component, OnInit } from '@angular/core';
import { NgModule, Input }      from '@angular/core';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { PlayerService } from '../../player.service'
import { Class } from '@angular/core';
import { TeamService } from '../../team.service'
import { TeamsComponent } from '../teams/teams.component';
import { Team } from '../teams/teams.component';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  private players : Player = Player[7];
  private teams : Team = Team[32];

  constructor(private playerService : PlayerService,  private teamService : TeamService) { }

  ngOnInit() {
    this.playerService.getPlayers().subscribe(
      players => {
        this.players = players;
      },
      () => console.log('Completed!')
    ),

    this.teamService.getTeam().subscribe(
      teams => {
        this.teams = teams; 
      }
    );
    return this.teams;
  }
}
  

export class Player {
  private id;
  private name;
  private birthDate;
  private position;
  private body;
  private height;
  private weight;
  private team;

  constructor(id, name, birthDate, position, body, height, weight, team) {
    this.id = id;
    this.name = name;
    this.birthDate = birthDate;
    this.position = position;
    this.body = body;
    this.height = height;
    this.weight = weight;
    this.team = team;
  }


}
