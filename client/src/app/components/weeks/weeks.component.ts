import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../team.service';
import { MatchService } from '../../match.service';
import { Team } from '../teams/teams.component';
import { Match } from '../matches/matches.component';
import { NgModule, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../players/players.component';

@Component({
  selector: 'app-weeks',
  templateUrl: './weeks.component.html',
  styleUrls: ['./weeks.component.css']
})
export class WeeksComponent implements OnInit {

  num: number;
  page: number;
  private teams: Team = Team[32];
  private match: Match = Match[16];
  private week1Page1: Match[];
  private week1Page2: Match[];

  private week2Page1: Match[];
  private week2Page2: Match[];

  private week1: Match[];
  private week2: Match[];

  private week1TopPassers: Match[]
  private week2TopPassers: Match[]

  private week1TopRushers: Match[]
  private week2TopRushers: Match[]

  private week1TopReceivers: Match[]
  private week2TopReceivers: Match[]


  constructor(private route: ActivatedRoute, private teamService: TeamService, private matchService: MatchService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.num = +params['num']; // (+) converts string 'id' to a number
      this.page = +params['page'];
      // In a real app: dispatch action to load the details here.
    });

    this.matchService.getMatches().subscribe(
      match => {
        this.match = match;

      });

    if (this.getTeams(this.teams) != null) {
      teams => {
        this.teams = this.getTeams(teams);
      }
    }

    this.matchService.getWeek1Page1().subscribe(
      week1Page1 => {
        this.week1Page1 = week1Page1;
      });

    this.matchService.getWeek1Page2().subscribe(
      week1Page2 => {
        this.week1Page2 = week1Page2;
      });

    this.matchService.getWeek2Page1().subscribe(
      week2Page1 => {
        this.week2Page1 = week2Page1;
      });

    this.matchService.getWeek2Page2().subscribe(
      week2Page2 => {
        this.week2Page2 = week2Page2;
      });

    this.matchService.getWeek1().subscribe(
      week1 => {
        this.week1 = week1;
      });

    this.matchService.getWeek2().subscribe(
      week2 => {
        this.week2 = week2;
      });

    this.matchService.getWeek1TopPassers().subscribe(
      week1passers => {
        this.week1TopPassers = week1passers;
      });

    this.matchService.getWeek2TopPassers().subscribe(
      week2passers => {
        this.week2TopPassers = week2passers;
      });

    this.matchService.getWeek1TopRushers().subscribe(
      week1rushers => {
        this.week1TopRushers = week1rushers;
      });

    this.matchService.getWeek2TopRushers().subscribe(
      week2rushers => {
        this.week2TopRushers = week2rushers;
      });

    this.matchService.getWeek1TopReceivers().subscribe(
      week1receivers => {
        this.week1TopReceivers = week1receivers;
      });

    this.matchService.getWeek2TopReceivers().subscribe(
      week2receivers => {
        this.week2TopReceivers = week2receivers;
      });
  }


  getTeams(csapat) {
    this.teamService.getTeam().subscribe(
      csapat => {
        this.teams = csapat;
      });
    return csapat;
  }

}
