import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MatchService {

  constructor(private http: Http) { }

  public getMatches() {
    var a = this.http.get('http://localhost:3000/matches').map(response => response.json());
    console.log(a);
      return a;
  }

  public getWeek1() {
    var a = this.http.get('http://localhost:3000/matches/week1')
      .map(response => response.json());
    console.log(a);
      return a;
  }

  public getWeek1Page1() {
    var a = this.http.get('http://localhost:3000/matches/week1/1-10')
      .map(response => response.json());
    console.log(a);
      return a;
  }

  public getWeek1Page2() {
    var a = this.http.get('http://localhost:3000/matches/week1/10-20')
      .map(response => response.json());
    console.log(a);
      return a;
  }

  public getWeek2Page1() {
    var a = this.http.get('http://localhost:3000/matches/week2/1-10')
      .map(response => response.json());
    console.log(a);
      return a;
  }

  public getWeek2Page2() {
    var a = this.http.get('http://localhost:3000/matches/week2/10-20')
      .map(response => response.json());
    console.log(a);
      return a;
  }

  public getWeek2() {
    var a = this.http.get('http://localhost:3000/matches/week2')
      .map(response => response.json());
    console.log(a);
      return a;
  }

  public getWeek1TopPassers() {
    var a = this.http.get('http://localhost:3000/matches/week1/top_passers')
      .map(response => response.json());
    console.log(a);
      return a;
  }

  public getWeek2TopPassers() {
    var a = this.http.get('http://localhost:3000/matches/week2/top_passers')
      .map(response => response.json());
    console.log(a);
      return a;
  }


  public getWeek1TopRushers() {
    var a = this.http.get('http://localhost:3000/matches/week1/top_rushers')
      .map(response => response.json());
    console.log(a);
      return a;
  }

  public getWeek2TopRushers() {
    var a = this.http.get('http://localhost:3000/matches/week2/top_rushers')
      .map(response => response.json());
    console.log(a);
      return a;
  }

  public getWeek1TopReceivers() {
    var a = this.http.get('http://localhost:3000/matches/week1/top_receivers')
      .map(response => response.json());
    console.log(a);
      return a;
  }

  public getWeek2TopReceivers() {
    var a = this.http.get('http://localhost:3000/matches/week2/top_receivers')
      .map(response => response.json());
    console.log(a);
      return a;
  }

  public getUpComingMatches() {
    var a = this.http.get('http://localhost:3000/matches/upcoming')
      .map(response => response.json());
      return a;
  }
}
