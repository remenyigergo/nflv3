import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class GetService {

  constructor(private http: Http) { }

  public getAMatch() {
    var a = this.http.get('http://localhost:3006/api/matches/find').map(response => response.json());
    console.log(a);
      return a;
  }

  public getAPlayerById(id) {
    var a = this.http.get('http://localhost:3006/api/players/'+id).map(response => response.json());
    console.log(a);
      return a;
  }
  public getAPlayerByName(name) {
    var a = this.http.get('http://localhost:3006/api/players/name/'+name).map(response => response.json());
    console.log(a);
      return a;
  }

  public getAMatchById(id) {
    var a = this.http.get('http://localhost:3006/api/matches/'+id).map(response => response.json());
    console.log(a);
      return a;
  }

  public getATeamById(id) {
    var a = this.http.get('http://localhost:3006/api/teams/'+id).map(response => response.json());
    console.log(a);
      return a;
  }
}


