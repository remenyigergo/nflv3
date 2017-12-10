import { Component, OnInit, Input } from '@angular/core';
import { MatchService } from '../../match.service'
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { TeamsComponent, Team } from '../teams/teams.component'
import { TeamService } from '../../team.service'

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  private match: Match = Match[16];
  private teams: Team = Team[32];
  

  @Input() matchSharedCollection = this.match;
  
    constructor(private matchService: MatchService, private teamService : TeamService) {
      
    }
  
    ngOnInit() {

      this.matchService.getMatches().subscribe(
        match => {
          this.match = match;
          
        });

        if (this.getTeams(this.teams) != null) {
          teams => {
            this.teams = this.getTeams(teams);
          }
        }

        

        
      }

      getTeams(csapat) {
        this.teamService.getTeam().subscribe(
          csapat=> {
            this.teams = csapat;
          });
          return csapat;
      }



}


export class Match {
  public date;
/*   private week;
  private guestId;
  private homeId;
  private guestScore;
  private homeScore;
  private PassYds;
  private PassYdsPoints;
  private RushYds;
  private RushYdsPoints;
  private RecYds;
  private RecYdsPoints; */

  constructor(
    s: string,

  ) {}

/*   constructor(date, week, guestId, homeId, guestScore, homeScore, PassYds, PassYdsPoints, RushYds, RushYdsPoints, RecYds, RecYdsPoints) {
    this.date = date;
    this.week = week;
    this.guestId = guestId;
    this.homeId = homeId;
    this.guestScore = guestScore;
    this.homeScore = homeScore;
    this.PassYds = PassYds;
    this.PassYdsPoints = PassYdsPoints;
    this.RushYds = RushYds;
    this.RushYdsPoints = RushYdsPoints;
    this.RecYds = RecYds;
    this.RecYdsPoints = RecYdsPoints;
  } */

  

}
