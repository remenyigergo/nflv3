import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TeamService {

  constructor(private http: Http) { }
  
  public getTeamPage1() {
    var a = this.http.get('http://localhost:3000/teams/1-20')
      .map(response => response.json());
    console.log(a);
      return a;
  }

  public getTeamPage2() {
    var a = this.http.get('http://localhost:3000/teams/20-40')
      .map(response => response.json());
    console.log(a);
      return a;
  }


  public getTeam() {
    var a = this.http.get('http://localhost:3000/teams')
      .map(response => response.json());
    console.log(a);
      return a;
  }
}


